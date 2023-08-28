package  
{
    import flash.display.Loader;
    import flash.display.Sprite;
    
    import flash.net.URLRequest;
    
    import flash.events.Event;
    import flash.events.ProgressEvent;
    
	import com.greensock.TweenLite;
    
    /**
    * ...
    * @author rragona
    * 
    */
    
    public class PortLoader extends Sprite
    {
        private var mainPath:String = new String("portfolio.swf");
        
        private var siteReq:URLRequest = new URLRequest(mainPath);
        private var siteLdr:Loader = new Loader();
        
        private var loadBar:Sprite = new Sprite();
        
        public function MyLoader() 
        {
            drawLoader();
            loadMain();
        }
        
        private function loadMain():void
        {
            siteLdr.load(siteReq);
            
            siteLdr.contentLoaderInfo.addEventListener(Event.COMPLETE, completeHandler);
            siteLdr.contentLoaderInfo.addEventListener(ProgressEvent.PROGRESS, changeHandler);
        }
        
        private function drawLoader():void
        {
            addChild(loadFill);
            
            loadFill.graphics.beginFill(0xFFFFFF, 1);
            loadFill.graphics.drawRect(0, 0, 1, 100);
            loadFill.graphics.endFill();
        }
        
        private function updateLoadProgress(perc:Number):void
        {
            var xTarg:Number = (stage.stageWidth) * perc;
            TweenLite.to(loadFill, .75, { width: xTarg, ease:Sine.easeInOut} );
        }
        
        private function changeHandler(e:ProgressEvent):void
        {
            var percentLoaded:Number = e.bytesLoaded / e.bytesTotal;
            updateLoadProgress(percentLoaded);
        }
        
        private function completeHandler(e:ProgressEvent):void
        {
            trace('site is loaded');
        }
        
    }
    
}