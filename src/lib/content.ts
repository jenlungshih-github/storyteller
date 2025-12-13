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
    appName: '故事讲述者',
    sidebar: {
      home: '故事模板',
      prompts: '灵感生成器',
      expander: '故事扩展',
      library: '范例库',
      skills: '写作技巧',
      feedback: '提交反馈',
    },
    interactiveTemplate: {
      title: '创作你的故事',
      description: '填写空白，构建你故事的基础。',
      cardTitle: '故事大纲',
      cardDescription: '每个伟大的故事都始于一个计划。让我们来构建你的！',
      characterName: { label: '角色名称', placeholder: '例如，狮子利奥' },
      characterTraits: { label: '角色特点', placeholder: '例如，勇敢但害怕蜘蛛' },
      setting: { label: '故事背景', placeholder: '例如，在一个树木会窃窃私语的魔法森林里' },
      plotPoints: '情节要点',
      problem: { label: '问题/目标', placeholder: '例如，太阳从天空中消失了...' },
      climax: { label: '高潮', placeholder: '例如，利奥对抗偷走太阳的影子怪物。' },
      resolution: { label: '结局', placeholder: '例如，利奥发现怪物只是孤独，他们成了朋友。' },
      moral: { label: '故事寓意（可选）', placeholder: '例如，友谊可以在意想不到的地方找到。', description: '你的故事教会了什么道理？' },
      submitButton: '扩展成一个故事',
    },
    prompts: {
      title: '生成故事灵感',
      description: '没有想法？让我们激发你的想象力！',
      cardTitle: '获取灵感',
      cardDescription: '告诉我们一个主题和一些关键词，我们将为你生成一个独特的故事创意。',
      theme: { label: '主题', placeholder: '例如，友谊、勇气' },
      keywords: { label: '关键词', placeholder: '例如，龙、城堡、秘密' },
      button: '生成灵感',
      buttonLoading: '生成中...',
      result: {
        title: '你的故事灵感',
        description: '这是你下一次冒险的起点。',
        placeholder: '你生成的灵感将显示在这里。'
      },
    },
    expander: {
        title: '扩展你的故事',
        description: '将你简单的提纲变成一个丰富精彩的故事。',
        outline: {
            title: '你的大纲',
            description: '在此处粘贴你的故事大纲，或使用模板中的大纲。',
            placeholder: '例如，一只害羞的松鼠想交朋友...'
        },
        button: '扩展故事',
        buttonLoading: '写作中...',
        result: {
            title: '你完成的故事',
            description: '这是你故事的完整版本！',
            placeholder: '你扩展的故事将神奇地出现在这里。'
        },
        error: {
            title: '大纲为空',
            description: '在扩展故事之前，请提供一个大纲。'
        }
    },
    library: {
        title: '范例库',
        description: '探索这些故事以获取灵感。',
        examples: [
            {
                title: '找到朋友的小机器人',
                summary: '一个孤独的机器人在大城市里与一只小鸟成为了意想不到的朋友。',
                fullText: '单元734是一个小小的银色机器人。他每天都擦拭着城市里高耸的玻璃大楼。他看到很多人，但他总是孤身一人。一天，一只翅膀受伤的蓝色小鸟落在了他的肩膀上。单元734小心翼翼地在他的充电站里为小鸟筑了一个小巢。小鸟在康复期间，为机器人唱着甜美的歌曲。当小鸟的翅膀好了，它没有飞走。它留在了单元734身边，小机器人再也不孤单了。'
            },
            {
                title: '魔法树屋',
                summary: '两个朋友建造了一个可以飞到任何他们想象地方的树屋。',
                fullText: '米娅和汤姆最想要一个树屋。他们收集了旧木板、弯曲的钉子和彩色的油漆。它不完美，但它是他们的。一个阳光明媚的下午，米娅希望能看到大海。树屋嘎吱作响，然后升入了空中！他们飞越了他们的小镇，降落在一个沙滩上。他们的魔法树屋可以带他们去任何地方，只要他们一起想象。'
            },
            {
                title: '脾气暴躁的熊的惊喜',
                summary: '一只只想睡觉的脾气暴躁的熊，从一只执着的松鼠那里学会了分享的快乐。',
                fullText: '熊巴纳比脾气很坏。冬天快到了，他只想睡觉。但一只叫吱吱的小松鼠不停地敲他的门。“走开！”巴纳比会咆哮。一天，吱吱在他的门口放了一颗完美的橡子。巴纳比抱怨着，但还是吃了。它很美味。第二天，他发现了两颗橡子。很快，他的门口就堆满了坚果和浆果。巴纳比意识到吱吱想成为他的朋友。他打开门，邀请小松鼠进来分享盛宴。巴纳比不再那么脾气暴躁了。'
            },
        ],
    },
    skills: {
        title: '提高你的写作技巧',
        description: '学习技巧，让你的故事更上一层楼。',
        example: '例子',
        before: '之前',
        after: '之后',
        skillList: [
            {
                title: '使用简洁的语言',
                explanation: '好的写作清晰明了。避免不必要的词语，使你的句子更有力。',
                example: {
                    before: '那个非常巨大、庞大的巨人慢慢地走向那个小村庄。',
                    after: '那个庞大的巨人蹒跚地走向村庄。'
                }
            },
            {
                title: '添加声音',
                explanation: '调动读者的听觉！使用描述声音的词语会让故事更具沉浸感。',
                example: {
                    before: '门开了，风吹了进来。',
                    after: '门嘎吱一声呻吟着打开了，风从缝隙中呼啸而入。'
                }
            },
            {
                title: '意想不到的惊喜',
                explanation: '一个好故事有转折。用读者意想不到的情节给他们一个惊喜。',
                example: {
                    before: '骑士与龙搏斗并获胜。',
                    after: '当骑士举起剑时，龙打了个喷嚏，原来它只是一只感冒了的龙宝宝。'
                }
            },
            {
                title: '节奏与重复',
                explanation: '使用重复的短语或句子结构可以创造出令人难忘的节奏，尤其适合年幼的读者。',
                example: {
                    before: '猫在找它的玩具。它在盒子里找。它在椅子上找。',
                    after: '小猫的玩具在哪里，哦，在哪里？在盒子里吗？不，不，不。在椅子上吗？不，不，不。'
                }
            },
            {
                title: '展示，而非告知情感',
                explanation: '不要直接说一个角色很伤心，而是描述他们的行为。这有助于读者感受情感。',
                example: {
                    before: '那个男孩很伤心。',
                    after: '男孩的肩膀垮了下来，一滴眼泪顺着他的脸颊滑落。'
                }
            }
        ]
    },
    feedback: {
        title: '提交反馈',
        description: '有一个让你自豪的故事吗？发给我们吧！',
        cardTitle: '分享你的作品',
        cardDescription: '我们喜欢读你们的故事！请在下面提交你的草稿或大纲。这不会被AI处理。',
        email: { label: '你的邮箱', placeholder: 'you@example.com' },
        story: { label: '你的故事/大纲', placeholder: '从前...' },
        submitButton: '提交反馈',
        success: {
            title: '反馈已发送！',
            description: '感谢你与我们分享你的故事。'
        }
    },
    common: {
        error: {
            title: '发生错误',
            description: '出了一些问题。请稍后再试。'
        }
    }
  },
};

export default content;
