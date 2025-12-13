
export const placeholderImages = [
    {
      id: "1",
      description: "A friendly dragon in a magical forest.",
      imageUrl: "https://picsum.photos/seed/story1/600/400",
      imageHint: "dragon forest"
    },
    {
      id: "2",
      description: "A robot discovering a garden on a spaceship.",
      imageUrl: "https://picsum.photos/seed/story2/600/400",
      imageHint: "robot garden"
    },
    {
      id: "3",
      description: "A brave mouse sailing on a leaf boat.",
      imageUrl: "https://picsum.photos/seed/story3/600/400",
      imageHint: "mouse boat"
    },
    {
        id: "4",
        description: "Two kids building a treehouse in the clouds.",
        imageUrl: "https://picsum.photos/seed/story4/600/400",
        imageHint: "kids treehouse"
    }
];

const content = {
  en: {
    appName: 'Story Teller',
    sidebar: {
      home: 'Story Template',
      prompts: 'Prompt Generator',
      expander: 'Story Expander',
      library: 'Example Library',
      skills: 'Writing Skills',
      feedback: 'Submit Feedback',
    },
    interactiveTemplate: {
      title: 'Create Your Story',
      description: 'Fill in the blanks to build the foundation of your tale.',
      cardTitle: 'Story Outline',
      cardDescription: 'Every great story starts with a plan. Let\'s build yours!',
      characterName: { label: 'Character Name', placeholder: 'e.g., Leo the lion' },
      characterTraits: { label: 'Character Traits', placeholder: 'e.g., brave but afraid of spiders' },
      setting: { label: 'Setting', placeholder: 'e.g., A magical forest where the trees whisper secrets' },
      plotPoints: 'Plot Points',
      problem: { label: 'The Problem / Goal', placeholder: 'e.g., The sun has disappeared from the sky...' },
      climax: { label: 'The Climax', placeholder: 'e.g., Leo confronts the shadow monster that stole the sun.' },
      resolution: { label: 'The Resolution', placeholder: 'e.g., Leo learns the monster was just lonely and they become friends.' },
      moral: { label: 'Moral of the Story (Optional)', placeholder: 'e.g., Friendship can be found in unexpected places.', description: 'What lesson does your story teach?' },
      submitButton: 'Expand into a Story',
    },
    prompts: {
      title: 'Generate a Story Prompt',
      description: 'Stuck for an idea? Let\'s spark your imagination!',
      cardTitle: 'Get Inspired',
      cardDescription: 'Tell us a theme and some keywords, and we\'ll generate a unique story idea for you.',
      theme: { label: 'Theme', placeholder: 'e.g., Friendship, Courage' },
      keywords: { label: 'Keywords', placeholder: 'e.g., Dragon, Castle, Secret' },
      button: 'Generate Prompt',
      buttonLoading: 'Generating...',
      result: {
        title: 'Your Story Prompt',
        description: 'Here is a starting point for your next adventure.',
        placeholder: 'Your generated prompt will appear here.'
      },
    },
    expander: {
        title: 'Expand Your Story',
        description: 'Transform your simple outline into a rich and wonderful tale.',
        outline: {
            title: 'Your Outline',
            description: 'Paste your story outline here, or use the one from the template.',
            placeholder: 'e.g., A shy squirrel wants to make friends...'
        },
        button: 'Expand Story',
        buttonLoading: 'Writing...',
        result: {
            title: 'Your Completed Story',
            description: 'Here is the full version of your story!',
            placeholder: 'Your expanded story will magically appear here.'
        },
        error: {
            title: 'Empty Outline',
            description: 'Please provide an outline before expanding the story.'
        }
    },
    library: {
        title: 'Example Library',
        description: 'Explore these stories for inspiration.',
        examples: [
            {
                title: 'The Little Robot Who Found a Friend',
                summary: 'A lonely robot in a big city finds an unlikely friend in a small, chirping bird.',
                fullText: 'Unit 734 was a small, silver robot. Every day, he polished the towering glass buildings of the city. He saw many people, but he was always alone. One day, a little blue bird with a hurt wing landed on his shoulder. Unit 734 carefully built a small nest for the bird in his charging station. As the bird healed, it sang sweet songs to the robot. When the bird\'s wing was better, it didn\'t fly away. It stayed with Unit 734, and the little robot was never lonely again.'
            },
            {
                title: 'The Magical Treehouse',
                summary: 'Two friends build a treehouse that can fly wherever they imagine.',
                fullText: 'Mia and Tom wanted a treehouse more than anything. They gathered old wood, crooked nails, and colorful paint. It wasn\'t perfect, but it was theirs. One sunny afternoon, Mia wished they could see the ocean. The treehouse creaked and groaned, then lifted into the air! They soared over their town and landed on a sandy beach. Their magical treehouse could take them anywhere, as long as they imagined it together.'
            },
            {
                title: 'The Grumpy Bear\'s Surprise',
                summary: 'A grumpy bear who just wants to sleep learns the joy of sharing from a persistent squirrel.',
                fullText: 'Barnaby the bear was very grumpy. Winter was coming and he just wanted to sleep. But a little squirrel named Squeaky kept knocking on his door. "Go away!" Barnaby would roar. One day, Squeaky left a single, perfect acorn on his doorstep. Barnaby grumbled, but ate it. It was delicious. The next day, he found two acorns. Soon, his doorstep was filled with nuts and berries. Barnaby realized Squeaky was trying to be his friend. He opened the door and invited the little squirrel in to share the feast. Barnaby wasn\'t so grumpy after all.'
            },
        ],
    },
    skills: {
        title: 'Improve Your Writing Skills',
        description: 'Learn techniques to make your stories even better.',
        example: 'Example',
        before: 'Before',
        after: 'After',
        skillList: [
            {
                title: 'Use Concise Language',
                explanation: 'Good writing is clear and to the point. Avoid unnecessary words to make your sentences stronger.',
                example: {
                    before: 'The really big, huge, enormous giant walked slowly over to the small village.',
                    after: 'The enormous giant lumbered towards the village.'
                }
            },
            {
                title: 'Add Sounds',
                explanation: 'Engage your reader\'s ears! Using words that describe sounds makes the story more immersive.',
                example: {
                    before: 'The door opened and the wind blew.',
                    after: 'The door creaked open with a groan, and the wind howled through the gap.'
                }
            },
            {
                title: 'Unexpected Surprises',
                explanation: 'A good story has twists and turns. Surprise your reader with something they don\'t see coming.',
                example: {
                    before: 'The knight fought the dragon and won.',
                    after: 'As the knight raised his sword, the dragon sneezed, revealing it was just a baby with a cold.'
                }
            },
            {
                title: 'Rhythm and Repetition',
                explanation: 'Using a repeating phrase or sentence structure can create a memorable rhythm, especially for younger readers.',
                example: {
                    before: 'The cat looked for its toy. It looked in the box. It looked on the chair.',
                    after: 'Where, oh where, was the little cat\'s toy? Was it in the box? No, no, no. Was it on the chair? No, no, no.'
                }
            },
            {
                title: 'Show, Don\'t Tell Emotion',
                explanation: 'Instead of saying a character is sad, describe what they are doing. This helps the reader feel the emotion.',
                example: {
                    before: 'The boy was sad.',
                    after: 'The boy\'s shoulders slumped, and a tear rolled down his cheek.'
                }
            }
        ]
    },
    feedback: {
        title: 'Submit for Feedback',
        description: 'Have a story you\'re proud of? Send it to us!',
        cardTitle: 'Share Your Work',
        cardDescription: 'We love reading your stories! Please submit your draft or outline below. This is not processed by AI.',
        email: { label: 'Your Email', placeholder: 'you@example.com' },
        story: { label: 'Your Story / Outline', placeholder: 'Once upon a time...' },
        submitButton: 'Submit Feedback',
        success: {
            title: 'Feedback Sent!',
            description: 'Thank you for sharing your story with us.'
        }
    },
    common: {
        error: {
            title: 'An Error Occurred',
            description: 'Something went wrong. Please try again later.'
        }
    }
  },
  zh: {
    appName: '故事講述者',
    sidebar: {
      home: '故事範本',
      prompts: '靈感產生器',
      expander: '故事擴展',
      library: '範例庫',
      skills: '寫作技巧',
      feedback: '提交回饋',
    },
    interactiveTemplate: {
      title: '創作你的故事',
      description: '填寫空白，建構你故事的基礎。',
      cardTitle: '故事大綱',
      cardDescription: '每個偉大的故事都始於一個計畫。讓我們來建構你的！',
      characterName: { label: '角色名稱', placeholder: '例如，獅子利奧' },
      characterTraits: { label: '角色特點', placeholder: '例如，勇敢但害怕蜘蛛' },
      setting: { label: '故事背景', placeholder: '例如，在一個樹木會竊竊私語的魔法森林裡' },
      plotPoints: '情節要點',
      problem: { label: '問題/目標', placeholder: '例如，太陽從天空中消失了...' },
      climax: { label: '高潮', placeholder: '例如，利奧對抗偷走太陽的影子怪物。' },
      resolution: { label: '結局', placeholder: '例如，利奧發現怪物只是孤獨，他們成了朋友。' },
      moral: { label: '故事寓意（可選）', placeholder: '例如，友誼可以在意想不到的地方找到。', description: '你的故事教會了什麼道理？' },
      submitButton: '擴展成一個故事',
    },
    prompts: {
      title: '產生故事靈感',
      description: '沒有想法？讓我們激發你的想像力！',
      cardTitle: '獲取靈感',
      cardDescription: '告訴我們一個主題和一些關鍵詞，我們將為你產生一個獨特的故事創意。',
      theme: { label: '主題', placeholder: '例如，友誼、勇氣' },
      keywords: { label: '關鍵詞', placeholder: '例如，龍、城堡、秘密' },
      button: '產生靈感',
      buttonLoading: '產生中...',
      result: {
        title: '你的故事靈感',
        description: '這是你下一次冒險的起點。',
        placeholder: '你產生的靈感將顯示在這裡。'
      },
    },
    expander: {
        title: '擴展你的故事',
        description: '將你簡單的提綱變成一個豐富精彩的故事。',
        outline: {
            title: '你的大綱',
            description: '在此處貼上你的故事大綱，或使用範本中的大綱。',
            placeholder: '例如，一隻害羞的松鼠想交朋友...'
        },
        button: '擴展故事',
        buttonLoading: '寫作中...',
        result: {
            title: '你完成的故事',
            description: '這是你故事的完整版本！',
            placeholder: '你擴展的故事將神奇地出現在這裡。'
        },
        error: {
            title: '大綱為空',
            description: '在擴展故事之前，請提供一個大綱。'
        }
    },
    library: {
        title: '範例庫',
        description: '探索這些故事以獲取靈感。',
        examples: [
            {
                title: '找到朋友的小機器人',
                summary: '一個孤獨的機器人在大城市裡與一隻小鳥成為了意想不到的朋友。',
                fullText: '單元734是一個小小的銀色機器人。他每天都擦拭著城市裡高聳的玻璃大樓。他看到很多人，但他總是孤身一人。一天，一隻翅膀受傷的藍色小鳥落在了他的肩膀上。單元734小心翼翼地在他的充電站裡為小鳥築了一個小巢。小鳥在康復期間，為機器人唱著甜美的歌曲。當小鳥的翅膀好了，它沒有飛走。它留在了單元734身邊，小機器人再也不孤單了。'
            },
            {
                title: '魔法樹屋',
                summary: '兩個朋友建造了一個可以飛到任何他們想像地方的樹屋。',
                fullText: '米婭和湯姆最想要一個樹屋。他們收集了舊木板、彎曲的釘子和彩色的油漆。它不完美，但它是他們的。一個陽光明媚的下午，米婭希望能看到大海。樹屋嘎吱作響，然後升入了空中！他們飛越了他們的小鎮，降落在一個沙灘上。他們的魔法樹屋可以帶他們去任何地方，只要他們一起想像。'
            },
            {
                title: '脾氣暴躁的熊的驚喜',
                summary: '一隻只想睡覺的脾氣暴躁的熊，從一隻執著的松鼠那裡學會了分享的快樂。',
                fullText: '熊巴納比脾氣很壞。冬天快到了，他只想睡覺。但一隻叫吱吱的小松鼠不停地敲他的門。「走開！」巴納比會咆哮。一天，吱吱在他的門口放了一顆完美的橡子。巴納比抱怨著，但還是吃了。它很美味。第二天，他發現了兩顆橡子。很快，他的門口就堆滿了堅果和漿果。巴納比意識到吱吱想成為他的朋友。他打開門，邀請小松鼠進來分享盛宴。巴納比不再那麼脾氣暴躁了。'
            },
        ],
    },
    skills: {
        title: '提高你的寫作技巧',
        description: '學習技巧，讓你的故事更上一層樓。',
        example: '例子',
        before: '之前',
        after: '之後',
        skillList: [
            {
                title: '使用簡潔的語言',
                explanation: '好的寫作清晰明瞭。避免不必要的詞語，使你的句子更有力。',
                example: {
                    before: '那個非常巨大、龐大的巨人慢慢地走向那個小村莊。',
                    after: '那個龐大的巨人蹣跚地走向村莊。'
                }
            },
            {
                title: '添加聲音',
                explanation: '調動讀者的聽覺！使用描述聲音的詞語會讓故事更具沈浸感。',
                example: {
                    before: '門開了，風吹了進來。',
                    after: '門嘎吱一聲呻吟著打開了，風從縫隙中呼嘯而入。'
                }
            },
            {
                title: '意想不到的驚喜',
                explanation: '一個好故事有轉折。用讀者意想不到的情節給他們一個驚喜。',
                example: {
                    before: '騎士與龍搏鬥並獲勝。',
                    after: '當騎士舉起劍時，龍打了個噴嚏，原來它只是一隻感冒了的龍寶寶。'
                }
            },
            {
                title: '節奏與重複',
                explanation: '使用重複的片語或句子結構可以創造出令人難忘的節奏，尤其適合年幼的讀者。',
                example: {
                    before: '貓在找它的玩具。它在盒子裡找。它在椅子上找。',
                    after: '小貓的玩具在哪裡，哦，在哪裡？在盒子裡嗎？不，不，不。在椅子上嗎？不，不，不。'
                }
            },
            {
                title: '展示，而非告知情感',
                explanation: '不要直接說一個角色很傷心，而是描述他們的行為。這有助於讀者感受情感。',
                example: {
                    before: '那個男孩很傷心。',
                    after: '男孩的肩膀垮了下來，一滴眼淚順著他的臉頰滑落。'
                }
            }
        ]
    },
    feedback: {
        title: '提交回饋',
        description: '有一個讓你自豪的故事嗎？發給我們吧！',
        cardTitle: '分享你的作品',
        cardDescription: '我們喜歡讀你們的故事！請在下面提交你的草稿或大綱。這不會被AI處理。',
        email: { label: '你的信箱', placeholder: 'you@example.com' },
        story: { label: '你的故事/大綱', placeholder: '從前...' },
        submitButton: '提交回饋',
        success: {
            title: '回饋已傳送！',
            description: '感謝你與我們分享你的故事。'
        }
    },
    common: {
        error: {
            title: '發生錯誤',
            description: '出了一些問題。請稍後再試。'
        }
    }
  },
};

export default content;
