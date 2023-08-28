<?php get_header(); ?>

    <div id="container">
    
        <div id="main-single">
    
            <?php if(have_posts()) : ?><?php while(have_posts()) : the_post(); ?>
            
            <div class="page" id="post-<?php the_ID(); ?>">
        
                <div class="title">
                    <ul>
                        <li><?php _e('By'); ?> <?php  the_author(); ?></li>
                    </ul><br />
                </div>
                
                <h3><a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a></h3>
                
                <div class="entry">
        
                    <?php the_content(); ?>
                    <?php link_pages('<p><strong>Pages</strong>','</p>','number'); ?>
                    <?php edit_post_link('Edit','<p>','</p>'); ?>
                    
                </div>
        
            </div>
            
            <?php endwhile; ?>
        
            <?php else : ?>
        
                <div class="post">
                    <h2><?php _e('Not Found'); ?></h2>
                </div>
        
            <?php endif; ?>
        
        </div>
    
    </div>
    
    <?php get_sidebar('right'); ?>

	</div>
    
</div>

<?php get_footer(); ?>

</body>
</html>