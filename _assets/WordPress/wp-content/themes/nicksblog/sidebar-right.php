<div class="sidebar-right">

	<ul>

		<?php if (is_category()) similar_posts('match_cat&prefix=<li id="similar-posts" class="widget"><h2 class="widgettitle">Similar posts</h2><ul>&suffix=</ul></li>'); ?>
        
		<?php if ( function_exists('dynamic_sidebar') && dynamic_sidebar(2) ) : else : ?>

        <?php endif; ?>
    
    </ul>

</div>