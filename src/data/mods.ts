export type Platform = "webflow" | "custom-code" | "tilda";

export type Mod = {
  slug: string;
  order: number;
  title: string;
  description: string;
  cover: {
    src: string;
    alt: string;
  };
  code: {
    language: "html" | "css" | "js";
    snippet: string;
  };
  platform: Platform;
  resources?: Array<{ label: string; url: string }>;
};

export const PLATFORMS: readonly Platform[] = [
  "webflow",
  "custom-code",
  "tilda",
] as const;

export const mods: Mod[] = [
  {
    slug: "video-bg",
    order: 1,
    title: "Видео на фоне в зеро блок",
    description:
      "Видео добавляется в элемент HTML в зероблоке.  Поправить ссылку: вместо www.dropbox.com поставить dl.dropboxusercontent.com",
    cover: {
      src: "/img/tilda-video-bg.jpg",
      alt: "Превью модификации «Видео на фоне в зеро блок»",
    },
    code: {
      language: "html",
      snippet: `<video style="object-fit: cover; background-size: cover; width: 100%; height: 100%" preload="auto" playsinline autoplay loop muted>
  <source src="https://dl.dropboxusercontent.com/scl/fi/9gm9c7a1dnelz0d8jy4v6/bg-vid.mp4?rlkey=h9kfretr8sx7xmdv1z34ek4m2&st=vxpdxqqi&dl=0" type="video/mp4">
</video>`,
    },
    platform: "webflow",
  },
    {
    slug: "webflow-video-stopper",
    order: 2,
    title: "Остановка видео при закрытии попапа на Webflow",
    description:
      "1. Всему контейнеру/диву/секции (главному родителю) попапа задаем класс auto-stopper. 2. Закрывающему фону задаем класс auto-stop. 3. Закрывающему крестику задаем класс auto-stop. 4. Самому видео задаем класс auto-stop. Код добавить before </body>",
    cover: {
      src: "/img/webflow-auto-stopper-video-modal.jpg",
      alt: "Превью модификации «Видео на фоне в зеро блок»",
    },
    code: {
      language: "js",
      snippet: `<script>
      
        // Automatically stop and reset video in webflow when closing a pop up or module.
        // Apply the class '.auto-stop' to any buttons you want to stop the video with, the button must be in the same module as the video.
        // Apply the class '.auto-stopper' to the primary module element, this is usually the element you toggle the display of with webflow's interactions.
        
        var autoStopperBtn      =   document.querySelectorAll('.auto-stop');

        for (var i = 0; i < autoStopperBtn.length; i++) {
            
            (function(i) {
                
                autoStopperBtn[i].onclick = function () {
                    
                var autoStopperModule   =   autoStopperBtn[i].closest('.auto-stopper');
                    
                var autoStopperFrame    =   autoStopperModule.querySelector('iframe');
                    
                var autoStopperSrc      =   autoStopperFrame.src;
                    
                autoStopperFrame.src = ''; // clears url, some browsers wont update the url if it matches existing value.
                    
                autoStopperFrame.src = autoStopperSrc;
 
                }
                
            }(i));
            
        }
               
    </script>`,
    },
    platform: "webflow",
  },
];
