<?php get_header(); ?>

    <div id="container">
    
        <div id="main-single">
    
            <?php if(have_posts()) : ?><?php while(have_posts()) : the_post(); ?>
            
            <div class="date-header"><?php the_date('l, F j, Y', '<h2>', '</h2>'); ?></div>
        
            <div class="<?php $category = get_the_category(); echo $category[0]->category_nicename; ?>" id="post-<?php the_ID(); ?>">
            
                    <div class="<?php $category = get_the_category(); echo $category[0]->category_nicename; ?>-title">
                        <ul>
                            <li><?php _e('By'); ?> <?php  the_author(); ?> <?php _e('at'); ?> <?php the_time('g:i a'); ?></li>
                            <li><?php _e('Filed under:'); ?> <?php the_category(', ') ?></li>
                        </ul><br />
                    </div>
                    
                    <h3><a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a></h3>
                    
                    <div class="entry">
    
                        <?php the_content(); ?>
                        
                    </div>
                    
            </div>
    
    
            <div class="metadata">
    
                <p class="postmetadata">
                    <?php comments_popup_link('No Comments &#187;', '1 Comment &#187;', '% Comments &#187;'); ?> <?php edit_post_link('Edit', ''); ?>
                </p>
    
            </div>
    
        <?php endwhile; ?>
    
            <div class="navigation">
                <?php posts_nav_link(); ?>
            </div>
    
        <?php else : ?>
    
            <div class="post">
                <h2><?php _e('Not Found'); ?></h2>
            </div>
    
        <?php endif; ?>
    
        </div>
    
    <?php get_sidebar('right'); ?>
    
    </div>
    
</div>

<?php get_footer(); ?>

</body>
</html>