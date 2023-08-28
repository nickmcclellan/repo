diff -u disqus.module disqus.module
--- disqus.module	2010-03-04 13:33:26.000000000 -0500
+++ disqus.module	2009-10-30 13:40:34.000000000 -0400
@@ -433,12 +433,3 @@
   module_load_include('php', 'disqus', 'disqus');
   return new Disqus($user_api_key, $forum_api_key);
 }
-
-/**
- * Implementation hook_views_api
- */
-function disqus_views_api() {
-  return array(
-    'api' => 2,
-  );
-}
\ No newline at end of file
diff -u disqus.views.inc disqus.views.inc
--- disqus.views.inc	2010-03-04 13:46:26.000000000 -0500
+++ disqus.views.inc	2009-08-27 19:40:14.000000000 -0400
@@ -2,40 +2,37 @@
 // $Id: disqus.views.inc,v 1.1.2.4 2009/08/27 23:40:14 robloach Exp $
 
 /**
- * Implementation of hook_views_handlers().
- */
-function disqus_views_handlers() {
-  $handlers = array(
-    'handlers' => array(
-      'views_handler_field_node_disqus_comments' => array(
-        'parent' => 'views_handler_field',
-      ),
-    ),
-  );
-
-  return $handlers;
-}
-
-/**
  * Implementation of hook_views_data().
  */
 function disqus_views_data() {
-  $data['disqus']['table']['group'] = t('Disqus');
-
-  $data['disqus']['table']['join'] = array(
-    '#global' => array(),
-  );
-
   // Number of Disqus comments made on the given node.
-  $data['disqus']['disqus_comments'] = array(
-    'title' => t('Comments'),
-    'help' => t('Node link with the number of Disqus comments made on the node.'),
+  $data['node']['disqus_comments'] = array(
     'field' => array(
+      'title' => t('Disqus: Comments'),
+      'help' => t('The number of Disqus comments made on the node.'),
       'handler' => 'views_handler_field_node_disqus_comments',
-      'click sortable' => FALSE,
-      'notafield' => TRUE,
     ),
   );
-
   return $data;
 }
+
+/**
+ * Field handler to present the number of Disqus comments on a node.
+ */
+class views_handler_field_node_disqus_comments extends views_handler_field_node_link {
+  function construct() {
+    parent::construct();
+    $this->additional_fields['type'] = 'type';
+  }
+
+  /**
+   * When rendering the field.
+   */
+  function render($values) {
+    // Ensure Disqus comments are available on the node user has access to edit this node.
+    $node = node_load($this->aliases['nid']);
+    if (user_access('view disqus comments') && isset($node->disqus)) {
+      return theme('disqus_comments_num', $node->disqus);
+    }
+  }
+}
diff -u disqus_migrate.module disqus_migrate.module
--- disqus_migrate.module	2010-03-04 13:23:49.000000000 -0500
+++ disqus_migrate.module	2008-11-29 04:59:51.000000000 -0500
@@ -23,4 +23,4 @@
     'type' => MENU_LOCAL_TASK,
   );
   return $items;
-}
\ No newline at end of file
+}
