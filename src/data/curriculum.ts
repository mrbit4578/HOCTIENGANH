export type Vocab = {
  word: string;
  ipa: string;
  vi: string;
  emoji: string;
};

export type GrammarPoint = {
  title: string;
  formula: string;
  note: string;
  examples: { en: string; vi: string }[];
};

export type ParagraphChunk = {
  text: string;
  role?: "subject" | "verb" | "object" | "adverb";
};

export type ListenQuestion = {
  prompt: string;
  say: string;
  options: string[];
  answer: string;
};

export type WriteQuestion = {
  hint: string;
  emoji: string;
  answer: string;
};

export type Lesson = {
  slug: string;
  level: "starters" | "movers" | "flyers";
  order: number;
  title: string;
  titleVi: string;
  emoji: string;
  summary: string;
  video: { youtubeId: string; title: string };
  extraVideos?: { youtubeId: string; title: string; channel: string }[];
  source?: string;
  vocab: Vocab[];
  grammar: GrammarPoint;
  reading: {
    title: string;
    chunks: ParagraphChunk[][];
    viTranslation: string;
  };
  listen: ListenQuestion[];
  speak: { sentence: string; vi: string }[];
  write: WriteQuestion[];
};

export const levels = [
  {
    id: "starters",
    name: "Pre A1 Starters",
    emoji: "🌱",
    months: "Tháng 4–11",
    words: "~500 từ",
    goal: "Hiểu và dùng từ, cụm từ quen thuộc hằng ngày",
    exam: "Listening 20 phút (20 câu) · R&W 20 phút (25 câu) · Speaking 3–5 phút",
    totalItems: "45 câu hỏi · Tổng ~45 phút",
    cefr: "Pre A1",
    canDo: "Hiểu bảng chữ cái khi nghe, hiểu hướng dẫn ngắn, trả lời câu hỏi đơn giản về bản thân",
  },
  {
    id: "movers",
    name: "A1 Movers",
    emoji: "🌿",
    months: "Tháng 12–20",
    words: "~1.200–1.500 từ",
    goal: "Giao tiếp cơ bản, kể lại chuyện tranh đơn giản",
    exam: "Listening 25 phút (25 câu) · R&W 30 phút (35 câu) · Speaking 5–7 phút",
    totalItems: "60 câu hỏi · Tổng ~1 giờ 2 phút",
    cefr: "A1",
    canDo: "Hiểu hội thoại quen thuộc, đọc truyện ngắn có tranh, viết câu đơn về sở thích",
  },
  {
    id: "flyers",
    name: "A2 Flyers",
    emoji: "🌳",
    months: "Tháng 21–30",
    words: "~2.200–2.500 từ",
    goal: "Mô tả, kể chuyện, viết đoạn ngắn, chủ động đặt câu hỏi",
    exam: "Listening 25 phút (25 câu) · R&W 40 phút (44 câu) · Speaking 7–9 phút",
    totalItems: "69 câu hỏi · Tổng ~1 giờ 14 phút",
    cefr: "A2",
    canDo: "Hiểu câu chuyện có thì quá khứ, viết câu chuyện ngắn từ tranh, hỏi–đáp chủ động",
  },
] as const;

export const roadmap = [
  {
    phase: "GĐ 0 — Nền móng (Phonics)",
    emoji: "🌰",
    time: "2–3 tháng (tháng 1–3)",
    focus: "Phonics 44 âm, 100 sight words, 150–200 từ vựng chủ đề (Animals, Body, Colours, Food, Home, Toys)",
    output: "Đọc trơn từ CVC, nghe hiểu hướng dẫn lớp học, viết bảng chữ cái",
    books: "Oxford Phonics World 1–5 · Oxford Reading Tree cấp 1–2",
  },
  {
    phase: "GĐ 1 — Starters",
    emoji: "🌱",
    time: "6–8 tháng (tháng 4–11)",
    focus: "Đủ ~500 từ Starters + ngữ pháp: Present simple, Present continuous, Can, Have got, This is/These are, a/an, số nhiều",
    output: "Thi Starters (Listening 20' + R&W 20' + Speaking 3–5'), mục tiêu 12–15 khiên",
    books: "Family and Friends 1–2 · Kid's Box 1–2 · Fun for Starters (4 tháng cuối)",
  },
  {
    phase: "GĐ 2 — Movers",
    emoji: "🌿",
    time: "7–9 tháng (tháng 12–20)",
    focus: "+~700 từ Movers + ngữ pháp mới: Past simple, Comparatives/Superlatives, Must, Shall, Could, Relative clauses (who/which/where), Verb+inf/ing",
    output: "Thi Movers (Listening 25' + R&W 30' + Speaking 5–7'), mục tiêu 12–15 khiên",
    books: "Family and Friends 2–3 · Kid's Box 3–4 · Fun for Movers (5 tháng cuối)",
  },
  {
    phase: "GĐ 3 — Flyers",
    emoji: "🌳",
    time: "8–10 tháng (tháng 21–30)",
    focus: "+~1.000 từ Flyers + ngữ pháp mới: Past continuous, Present perfect, Will, May/Might, Should, Tag questions, If clauses, Be going to, Be made of",
    output: "Thi Flyers (Listening 25' + R&W 40' + Speaking 7–9'), mục tiêu 12–15 khiên",
    books: "Family and Friends 4–5 · Kid's Box 5–6 · Fun for Flyers (6 tháng cuối) · Authentic Practice Tests (8 tuần cuối)",
  },
];

export const weekPlan = [
  { day: "Thứ Hai", act: "Bài giáo trình + 8 từ vựng mới bằng flashcard", skill: "📖 Đọc – Từ vựng" },
  { day: "Thứ Ba", act: "Nghe hội thoại 2 lần + làm 1 phần đề Listening", skill: "🎧 Nghe" },
  { day: "Thứ Tư", act: "Đọc truyện phân cấp 1 quyển + kể lại 3 câu", skill: "📖 Đọc – 🗣️ Nói" },
  { day: "Thứ Năm", act: "Luyện Speaking theo thẻ tranh, quay video 3 phút", skill: "🗣️ Nói" },
  { day: "Thứ Sáu", act: "Chính tả 8 từ đã học + viết 3–5 câu theo tranh", skill: "✍️ Viết" },
  { day: "Thứ Bảy", act: "Làm 1 đề thi thử hoàn chỉnh", skill: "🏅 Tổng hợp" },
  { day: "Chủ nhật", act: "Xem hoạt hình tiếng Anh, chơi game từ vựng", skill: "🎈 Tắm ngôn ngữ" },
];

export const parentRules = [
  "Đều đặn thắng cường độ — 30 phút mỗi ngày hơn 3 giờ cuối tuần.",
  "Nghe – Nói trước, Đọc – Viết sau.",
  "Không dịch từng từ sang tiếng Việt, hãy dùng tranh và ngữ cảnh.",
  "Không sửa lỗi giữa lúc bé đang nói, tối đa 2 lỗi mỗi lần.",
  "Học từ theo cụm: `ride a bike` thay vì chỉ `ride`.",
  "Chứng chỉ là cột mốc, không phải đích đến.",
  "Đừng nhảy cấp — bỏ Starters khiến bé hổng nền.",
  "Ba mẹ không cần giỏi tiếng Anh, chỉ cần đồng hành.",
  "Ghi nhận tiến bộ bằng sticker và video hằng tháng.",
];

export const lessons: Lesson[] = [
  {
    slug: "colours-and-numbers",
    level: "starters",
    order: 1,
    title: "Colours & Numbers",
    titleVi: "Màu sắc và con số",
    emoji: "🎨",
    summary: "Gọi tên 8 màu và đếm từ 1 đến 20 — nền tảng cho phần Listening tô màu.",
    source: "Cambridge YLE Starters wordlist (Colours, Numbers) · Family and Friends Starter",
    video: { youtubeId: "tRNy2i75tCc", title: "The Rainbow Colors Song" },
    extraVideos: [
      { youtubeId: "YyFLBTTAbSE", title: "What Color Is It? Song — Learn 11 Colors", channel: "Dream English Kids" },
      { youtubeId: "j-XXk3dVeag", title: "What's this? — Easy Dialogue Role Play", channel: "English Singsing" },
    ],
    vocab: [
      { word: "red", ipa: "/red/", vi: "màu đỏ", emoji: "🍎" },
      { word: "blue", ipa: "/bluː/", vi: "màu xanh dương", emoji: "🫐" },
      { word: "green", ipa: "/ɡriːn/", vi: "màu xanh lá", emoji: "🥦" },
      { word: "yellow", ipa: "/ˈjeləʊ/", vi: "màu vàng", emoji: "🍌" },
      { word: "orange", ipa: "/ˈɒrɪndʒ/", vi: "màu cam", emoji: "🍊" },
      { word: "purple", ipa: "/ˈpɜːpl/", vi: "màu tím", emoji: "🍇" },
      { word: "one", ipa: "/wʌn/", vi: "số một", emoji: "1️⃣" },
      { word: "seven", ipa: "/ˈsevn/", vi: "số bảy", emoji: "7️⃣" },
    ],
    grammar: {
      title: "This is / These are",
      formula: "This is a + danh từ số ít  ·  These are + danh từ số nhiều",
      note: "Dùng `a` trước phụ âm, `an` trước nguyên âm (a ball / an apple).",
      examples: [
        { en: "This is a red ball.", vi: "Đây là một quả bóng màu đỏ." },
        { en: "These are three blue pens.", vi: "Đây là ba cây bút màu xanh." },
        { en: "This is an orange bag.", vi: "Đây là một chiếc cặp màu cam." },
      ],
    },
    reading: {
      title: "My colourful box",
      chunks: [
        [
          { text: "I", role: "subject" },
          { text: "have got", role: "verb" },
          { text: "a big box", role: "object" },
          { text: "in my room", role: "adverb" },
        ],
        [
          { text: "There are", role: "verb" },
          { text: "seven balls", role: "object" },
          { text: "in the box", role: "adverb" },
        ],
        [
          { text: "Two balls", role: "subject" },
          { text: "are", role: "verb" },
          { text: "red", role: "object" },
        ],
        [
          { text: "I", role: "subject" },
          { text: "like", role: "verb" },
          { text: "the yellow ball", role: "object" },
          { text: "very much", role: "adverb" },
        ],
      ],
      viTranslation:
        "Tớ có một chiếc hộp to trong phòng. Trong hộp có bảy quả bóng. Hai quả bóng màu đỏ. Tớ rất thích quả bóng màu vàng.",
    },
    listen: [
      { prompt: "Nghe và chọn màu đúng", say: "The bag is purple.", options: ["purple", "green", "red"], answer: "purple" },
      { prompt: "Nghe và chọn số đúng", say: "There are seven balls.", options: ["seven", "eleven", "seventeen"], answer: "seven" },
      { prompt: "Nghe và chọn câu đúng", say: "These are two yellow pens.", options: ["two yellow pens", "two yellow pencils", "ten yellow pens"], answer: "two yellow pens" },
    ],
    speak: [
      { sentence: "This is a red apple.", vi: "Đây là một quả táo đỏ." },
      { sentence: "These are six green balls.", vi: "Đây là sáu quả bóng xanh lá." },
      { sentence: "My favourite colour is blue.", vi: "Màu tớ thích nhất là màu xanh dương." },
    ],
    write: [
      { hint: "Màu của quả chuối", emoji: "🍌", answer: "yellow" },
      { hint: "Màu của quả táo trong bài", emoji: "🍎", answer: "red" },
      { hint: "Số đứng sau six", emoji: "7️⃣", answer: "seven" },
    ],
  },
  {
    slug: "my-family",
    level: "starters",
    order: 2,
    title: "My Family",
    titleVi: "Gia đình của tớ",
    emoji: "👨‍👩‍👧",
    summary: "Giới thiệu các thành viên trong gia đình và dùng `have got`.",
    source: "Cambridge YLE Starters wordlist (Family & friends) · Kid's Box 1 (My family)",
    video: { youtubeId: "d_WQEw13TCo", title: "Family Members Song" },
    extraVideos: [
      { youtubeId: "xb3za6PAXQE", title: "Good morning. How are you? — Easy Dialogue Role Play (luyện Speaking Part 4: hỏi–đáp cá nhân)", channel: "English Singsing" },
    ],
    vocab: [
      { word: "mother", ipa: "/ˈmʌðə/", vi: "mẹ", emoji: "👩" },
      { word: "father", ipa: "/ˈfɑːðə/", vi: "bố", emoji: "👨" },
      { word: "sister", ipa: "/ˈsɪstə/", vi: "chị/em gái", emoji: "👧" },
      { word: "brother", ipa: "/ˈbrʌðə/", vi: "anh/em trai", emoji: "👦" },
      { word: "grandmother", ipa: "/ˈɡrænmʌðə/", vi: "bà", emoji: "👵" },
      { word: "grandfather", ipa: "/ˈɡrænfɑːðə/", vi: "ông", emoji: "👴" },
      { word: "baby", ipa: "/ˈbeɪbi/", vi: "em bé", emoji: "👶" },
      { word: "cousin", ipa: "/ˈkʌzn/", vi: "anh chị em họ", emoji: "🧒" },
    ],
    grammar: {
      title: "Have got / Has got",
      formula: "I / You / We / They + have got  ·  He / She / It + has got",
      note: "Phủ định: haven't got · hasn't got. Câu hỏi: Have you got…? — Yes, I have. / No, I haven't.",
      examples: [
        { en: "I have got two sisters.", vi: "Tớ có hai chị em gái." },
        { en: "She has got a small baby brother.", vi: "Chị ấy có một em trai nhỏ." },
        { en: "Have you got a cousin?", vi: "Bạn có anh chị em họ không?" },
      ],
    },
    reading: {
      title: "This is my family",
      chunks: [
        [
          { text: "My name", role: "subject" },
          { text: "is", role: "verb" },
          { text: "Mai", role: "object" },
        ],
        [
          { text: "I", role: "subject" },
          { text: "have got", role: "verb" },
          { text: "a brother and a sister", role: "object" },
        ],
        [
          { text: "My father", role: "subject" },
          { text: "works", role: "verb" },
          { text: "in a big school", role: "adverb" },
        ],
        [
          { text: "We", role: "subject" },
          { text: "play", role: "verb" },
          { text: "football", role: "object" },
          { text: "on Sunday", role: "adverb" },
        ],
      ],
      viTranslation:
        "Tên tớ là Mai. Tớ có một anh trai và một em gái. Bố tớ làm việc ở một ngôi trường lớn. Chúng tớ chơi bóng đá vào Chủ nhật.",
    },
    listen: [
      { prompt: "Nghe và chọn người đúng", say: "My grandmother is seventy.", options: ["grandmother", "grandfather", "mother"], answer: "grandmother" },
      { prompt: "Nghe và chọn câu đúng", say: "Sam has got two brothers.", options: ["two brothers", "two sisters", "one brother"], answer: "two brothers" },
      { prompt: "Nghe và chọn từ đúng", say: "The baby is sleeping.", options: ["baby", "brother", "cousin"], answer: "baby" },
    ],
    speak: [
      { sentence: "I have got one sister and one brother.", vi: "Tớ có một chị gái và một em trai." },
      { sentence: "My mother is a teacher.", vi: "Mẹ tớ là giáo viên." },
      { sentence: "Have you got a big family?", vi: "Bạn có gia đình đông người không?" },
    ],
    write: [
      { hint: "Mẹ trong tiếng Anh", emoji: "👩", answer: "mother" },
      { hint: "Ông trong tiếng Anh", emoji: "👴", answer: "grandfather" },
      { hint: "Em bé trong tiếng Anh", emoji: "👶", answer: "baby" },
    ],
  },
  {
    slug: "animals-and-pets",
    level: "starters",
    order: 3,
    title: "Animals & Pets",
    titleVi: "Động vật và thú cưng",
    emoji: "🐶",
    summary: "Tên con vật, dùng `can / can't` để nói về khả năng.",
    source: "Cambridge YLE Starters wordlist (Animals) · Family and Friends 1 (Pets)",
    video: { youtubeId: "pWepfJ-8XU0", title: "Super Simple Songs — I Have A Pet" },
    extraVideos: [
      { youtubeId: "_Ir0Mc6Qilo", title: "Yes, I Can! — Animal Song (luyện đúng cấu trúc can/can't)", channel: "Super Simple Songs" },
    ],
    vocab: [
      { word: "dog", ipa: "/dɒɡ/", vi: "con chó", emoji: "🐶" },
      { word: "cat", ipa: "/kæt/", vi: "con mèo", emoji: "🐱" },
      { word: "bird", ipa: "/bɜːd/", vi: "con chim", emoji: "🐦" },
      { word: "fish", ipa: "/fɪʃ/", vi: "con cá", emoji: "🐟" },
      { word: "horse", ipa: "/hɔːs/", vi: "con ngựa", emoji: "🐴" },
      { word: "elephant", ipa: "/ˈelɪfənt/", vi: "con voi", emoji: "🐘" },
      { word: "monkey", ipa: "/ˈmʌŋki/", vi: "con khỉ", emoji: "🐵" },
      { word: "rabbit", ipa: "/ˈræbɪt/", vi: "con thỏ", emoji: "🐰" },
    ],
    grammar: {
      title: "Can / Can't",
      formula: "Chủ ngữ + can + động từ nguyên thể",
      note: "Sau `can` luôn là động từ nguyên mẫu, không thêm -s: He can swim (không phải cans/swims).",
      examples: [
        { en: "A bird can fly.", vi: "Con chim có thể bay." },
        { en: "A fish can't walk.", vi: "Con cá không thể đi bộ." },
        { en: "Can a rabbit jump? — Yes, it can.", vi: "Con thỏ có thể nhảy không? — Có." },
      ],
    },
    reading: {
      title: "At the zoo",
      chunks: [
        [
          { text: "Today", role: "adverb" },
          { text: "we", role: "subject" },
          { text: "are", role: "verb" },
          { text: "at the zoo", role: "adverb" },
        ],
        [
          { text: "The elephant", role: "subject" },
          { text: "is drinking", role: "verb" },
          { text: "water", role: "object" },
        ],
        [
          { text: "Two monkeys", role: "subject" },
          { text: "can climb", role: "verb" },
          { text: "the tall tree", role: "object" },
        ],
        [
          { text: "I", role: "subject" },
          { text: "can see", role: "verb" },
          { text: "a small rabbit", role: "object" },
          { text: "behind the box", role: "adverb" },
        ],
      ],
      viTranslation:
        "Hôm nay chúng tớ ở sở thú. Con voi đang uống nước. Hai chú khỉ có thể trèo lên cái cây cao. Tớ nhìn thấy một chú thỏ nhỏ phía sau chiếc hộp.",
    },
    listen: [
      { prompt: "Nghe và chọn con vật", say: "The monkey is in the tree.", options: ["monkey", "rabbit", "horse"], answer: "monkey" },
      { prompt: "Nghe và chọn câu đúng", say: "A fish can swim but it can't fly.", options: ["can swim", "can fly", "can run"], answer: "can swim" },
      { prompt: "Nghe và chọn số con vật", say: "There are four birds.", options: ["four birds", "fourteen birds", "four bears"], answer: "four birds" },
    ],
    speak: [
      { sentence: "I have got a small brown dog.", vi: "Tớ có một chú chó nhỏ màu nâu." },
      { sentence: "An elephant can't climb a tree.", vi: "Con voi không thể trèo cây." },
      { sentence: "My favourite animal is the rabbit.", vi: "Con vật tớ thích nhất là con thỏ." },
    ],
    write: [
      { hint: "Con vật có thể bay", emoji: "🐦", answer: "bird" },
      { hint: "Con vật to nhất ở sở thú trong bài", emoji: "🐘", answer: "elephant" },
      { hint: "Thú cưng kêu meo meo", emoji: "🐱", answer: "cat" },
    ],
  },
  {
    slug: "my-day",
    level: "movers",
    order: 6,
    title: "My Day",
    titleVi: "Một ngày của tớ",
    emoji: "⏰",
    summary: "Thì hiện tại đơn, trạng từ tần suất và kể lại thói quen hằng ngày.",
    source: "Cambridge YLE Movers wordlist (Time, Daily routines) · Family and Friends 2 (My day)",
    video: { youtubeId: "qD1pnquN_DM", title: "English Singsing — My Day: Daily Routine" },
    extraVideos: [
      { youtubeId: "_oEAdz3MAj0", title: "What Do You Do Every Day? — Daily Routines Song", channel: "Fun Kids English" },
    ],
    vocab: [
      { word: "wake up", ipa: "/weɪk ʌp/", vi: "thức dậy", emoji: "🛏️" },
      { word: "brush teeth", ipa: "/brʌʃ tiːθ/", vi: "đánh răng", emoji: "🪥" },
      { word: "breakfast", ipa: "/ˈbrekfəst/", vi: "bữa sáng", emoji: "🥣" },
      { word: "homework", ipa: "/ˈhəʊmwɜːk/", vi: "bài tập về nhà", emoji: "📓" },
      { word: "always", ipa: "/ˈɔːlweɪz/", vi: "luôn luôn", emoji: "💯" },
      { word: "sometimes", ipa: "/ˈsʌmtaɪmz/", vi: "thỉnh thoảng", emoji: "🔁" },
      { word: "never", ipa: "/ˈnevə/", vi: "không bao giờ", emoji: "🚫" },
      { word: "afternoon", ipa: "/ˌɑːftəˈnuːn/", vi: "buổi chiều", emoji: "🌤️" },
    ],
    grammar: {
      title: "Hiện tại đơn + trạng từ tần suất",
      formula: "S + (always/usually/often/sometimes/never) + V(s/es)",
      note: "He / She / It thêm -s: gets up, brushes, goes. Trạng từ tần suất đứng TRƯỚC động từ thường, SAU động từ to be.",
      examples: [
        { en: "I always get up at six o'clock.", vi: "Tớ luôn thức dậy lúc 6 giờ." },
        { en: "She never eats breakfast in bed.", vi: "Chị ấy không bao giờ ăn sáng trên giường." },
        { en: "We sometimes play in the park.", vi: "Chúng tớ thỉnh thoảng chơi ở công viên." },
      ],
    },
    reading: {
      title: "A busy Monday",
      chunks: [
        [
          { text: "Every morning", role: "adverb" },
          { text: "Nam", role: "subject" },
          { text: "wakes up", role: "verb" },
          { text: "at half past six", role: "adverb" },
        ],
        [
          { text: "He", role: "subject" },
          { text: "always brushes", role: "verb" },
          { text: "his teeth", role: "object" },
          { text: "before breakfast", role: "adverb" },
        ],
        [
          { text: "After school", role: "adverb" },
          { text: "he", role: "subject" },
          { text: "does", role: "verb" },
          { text: "his homework", role: "object" },
        ],
        [
          { text: "He", role: "subject" },
          { text: "never goes", role: "verb" },
          { text: "to bed", role: "adverb" },
          { text: "after nine o'clock", role: "adverb" },
        ],
      ],
      viTranslation:
        "Mỗi sáng Nam thức dậy lúc 6 giờ 30. Cậu ấy luôn đánh răng trước bữa sáng. Sau giờ học, cậu ấy làm bài tập về nhà. Cậu ấy không bao giờ đi ngủ sau 9 giờ tối.",
    },
    listen: [
      { prompt: "Nghe và chọn giờ đúng", say: "Nam wakes up at half past six.", options: ["half past six", "half past seven", "six o'clock"], answer: "half past six" },
      { prompt: "Nghe và chọn trạng từ", say: "She never eats breakfast at school.", options: ["never", "always", "sometimes"], answer: "never" },
      { prompt: "Nghe và chọn hoạt động", say: "After school he does his homework.", options: ["homework", "housework", "shopping"], answer: "homework" },
    ],
    speak: [
      { sentence: "I always wake up at six o'clock.", vi: "Tớ luôn thức dậy lúc 6 giờ." },
      { sentence: "I sometimes play football in the afternoon.", vi: "Tớ thỉnh thoảng chơi bóng đá buổi chiều." },
      { sentence: "I never go to bed late.", vi: "Tớ không bao giờ đi ngủ muộn." },
    ],
    write: [
      { hint: "Bữa ăn đầu tiên trong ngày", emoji: "🥣", answer: "breakfast" },
      { hint: "Trạng từ nghĩa là 'không bao giờ'", emoji: "🚫", answer: "never" },
      { hint: "Bài tập cô giáo cho về nhà", emoji: "📓", answer: "homework" },
    ],
  },
  {
    slug: "last-weekend",
    level: "movers",
    order: 7,
    title: "Last Weekend",
    titleVi: "Cuối tuần vừa rồi",
    emoji: "🏖️",
    summary: "Thì quá khứ đơn và động từ bất quy tắc — bước nhảy khó nhất của Movers.",
    source: "Cambridge YLE Movers grammar (Past simple) · Grammar Friends 3",
    video: { youtubeId: "qOUBcwlnTyc", title: "Past Simple Song — Regular & Irregular Verbs" },
    extraVideos: [
      { youtubeId: "5gSilgIWc58", title: "Irregular Past Tense Verbs — Grammar Rap Song", channel: "Mr Spelling" },
    ],
    vocab: [
      { word: "went", ipa: "/went/", vi: "đã đi (go)", emoji: "🚶" },
      { word: "saw", ipa: "/sɔː/", vi: "đã thấy (see)", emoji: "👀" },
      { word: "ate", ipa: "/eɪt/", vi: "đã ăn (eat)", emoji: "🍽️" },
      { word: "played", ipa: "/pleɪd/", vi: "đã chơi (play)", emoji: "⚽" },
      { word: "beach", ipa: "/biːtʃ/", vi: "bãi biển", emoji: "🏖️" },
      { word: "picnic", ipa: "/ˈpɪknɪk/", vi: "buổi dã ngoại", emoji: "🧺" },
      { word: "yesterday", ipa: "/ˈjestədeɪ/", vi: "hôm qua", emoji: "📅" },
      { word: "swam", ipa: "/swæm/", vi: "đã bơi (swim)", emoji: "🏊" },
    ],
    grammar: {
      title: "Quá khứ đơn (Past simple)",
      formula: "V-ed (có quy tắc) · V2 (bất quy tắc) · didn't + V nguyên thể",
      note: "Sau `didn't` động từ trở về nguyên mẫu: I didn't go (không phải didn't went).",
      examples: [
        { en: "We went to the beach last Sunday.", vi: "Chúng tớ đã ra biển Chủ nhật tuần trước." },
        { en: "I ate a big ice cream.", vi: "Tớ đã ăn một cây kem to." },
        { en: "She didn't play tennis yesterday.", vi: "Cô ấy đã không chơi tennis hôm qua." },
      ],
    },
    reading: {
      title: "Our picnic",
      chunks: [
        [
          { text: "Last Saturday", role: "adverb" },
          { text: "my family", role: "subject" },
          { text: "went", role: "verb" },
          { text: "to the beach", role: "adverb" },
        ],
        [
          { text: "We", role: "subject" },
          { text: "had", role: "verb" },
          { text: "a picnic", role: "object" },
          { text: "under a big tree", role: "adverb" },
        ],
        [
          { text: "My brother and I", role: "subject" },
          { text: "swam", role: "verb" },
          { text: "in the sea", role: "adverb" },
        ],
        [
          { text: "It", role: "subject" },
          { text: "was", role: "verb" },
          { text: "the best day", role: "object" },
          { text: "of the month", role: "adverb" },
        ],
      ],
      viTranslation:
        "Thứ Bảy tuần trước gia đình tớ ra biển. Chúng tớ đã có một buổi dã ngoại dưới gốc cây to. Anh trai và tớ đã bơi ở biển. Đó là ngày tuyệt nhất trong tháng.",
    },
    listen: [
      { prompt: "Nghe và chọn nơi chốn", say: "They went to the beach on Saturday.", options: ["beach", "park", "zoo"], answer: "beach" },
      { prompt: "Nghe và chọn động từ quá khứ", say: "I ate a big ice cream.", options: ["ate", "eat", "eating"], answer: "ate" },
      { prompt: "Nghe và chọn câu đúng", say: "She didn't play tennis yesterday.", options: ["didn't play tennis", "played tennis", "didn't play football"], answer: "didn't play tennis" },
    ],
    speak: [
      { sentence: "Last weekend I went to my grandmother's house.", vi: "Cuối tuần trước tớ về nhà bà." },
      { sentence: "We had a picnic and swam in the sea.", vi: "Chúng tớ dã ngoại và bơi ở biển." },
      { sentence: "I didn't watch television yesterday.", vi: "Hôm qua tớ đã không xem tivi." },
    ],
    write: [
      { hint: "Quá khứ của 'go'", emoji: "🚶", answer: "went" },
      { hint: "Quá khứ của 'swim'", emoji: "🏊", answer: "swam" },
      { hint: "Buổi ăn ngoài trời", emoji: "🧺", answer: "picnic" },
    ],
  },
  {
    slug: "telling-a-story",
    level: "flyers",
    order: 10,
    title: "Telling a Story",
    titleVi: "Kể một câu chuyện",
    emoji: "📖",
    summary: "Công thức 5 câu để viết truyện từ 3 bức tranh — phần khó nhất của Flyers.",
    source: "Fun for Flyers (Writing a story) · Cambridge YLE Flyers wordlist (Feelings)",
    video: { youtubeId: "B8SX7AABWmI", title: "How To Write a Story For Kids" },
    vocab: [
      { word: "suddenly", ipa: "/ˈsʌdnli/", vi: "đột nhiên", emoji: "⚡" },
      { word: "because", ipa: "/bɪˈkɒz/", vi: "bởi vì", emoji: "🔗" },
      { word: "excited", ipa: "/ɪkˈsaɪtɪd/", vi: "phấn khích", emoji: "🤩" },
      { word: "worried", ipa: "/ˈwʌrid/", vi: "lo lắng", emoji: "😟" },
      { word: "finally", ipa: "/ˈfaɪnəli/", vi: "cuối cùng", emoji: "🏁" },
      { word: "adventure", ipa: "/ədˈventʃə/", vi: "cuộc phiêu lưu", emoji: "🗺️" },
      { word: "have found", ipa: "/hæv faʊnd/", vi: "đã tìm thấy", emoji: "🔎" },
      { word: "will help", ipa: "/wɪl help/", vi: "sẽ giúp", emoji: "🤝" },
    ],
    grammar: {
      title: "Hiện tại hoàn thành & tương lai `will`",
      formula: "S + have/has + V3  ·  S + will + V nguyên thể",
      note: "Hiện tại hoàn thành dùng cho việc vừa xảy ra và còn liên quan tới hiện tại: I have lost my key (giờ vẫn chưa tìm thấy).",
      examples: [
        { en: "I have found my lost cat!", vi: "Tớ đã tìm thấy chú mèo bị lạc!" },
        { en: "She has never been to London.", vi: "Chị ấy chưa bao giờ đến London." },
        { en: "If it rains, we will stay at home.", vi: "Nếu trời mưa, chúng tớ sẽ ở nhà." },
      ],
    },
    reading: {
      title: "The lost kitten — công thức 5 câu",
      chunks: [
        [
          { text: "One rainy morning", role: "adverb" },
          { text: "Lan", role: "subject" },
          { text: "was walking", role: "verb" },
          { text: "to school", role: "adverb" },
        ],
        [
          { text: "Suddenly", role: "adverb" },
          { text: "she", role: "subject" },
          { text: "heard", role: "verb" },
          { text: "a small noise", role: "object" },
        ],
        [
          { text: "She", role: "subject" },
          { text: "has found", role: "verb" },
          { text: "a wet kitten", role: "object" },
          { text: "under a car", role: "adverb" },
        ],
        [
          { text: "Lan", role: "subject" },
          { text: "was", role: "verb" },
          { text: "worried", role: "object" },
          { text: "because it was cold", role: "adverb" },
        ],
        [
          { text: "Finally", role: "adverb" },
          { text: "she", role: "subject" },
          { text: "will keep", role: "verb" },
          { text: "the kitten", role: "object" },
          { text: "at home", role: "adverb" },
        ],
      ],
      viTranslation:
        "Một buổi sáng mưa, Lan đang đi bộ tới trường. Đột nhiên cô bé nghe một tiếng động nhỏ. Cô bé đã tìm thấy một chú mèo con ướt sũng dưới gầm xe. Lan lo lắng vì trời rất lạnh. Cuối cùng, cô bé sẽ giữ chú mèo ở nhà.",
    },
    listen: [
      { prompt: "Nghe và chọn cảm xúc", say: "Lan was worried because the kitten was cold.", options: ["worried", "excited", "angry"], answer: "worried" },
      { prompt: "Nghe và chọn trạng từ", say: "Suddenly she heard a small noise.", options: ["suddenly", "finally", "slowly"], answer: "suddenly" },
      { prompt: "Nghe và chọn câu đúng", say: "She has found a wet kitten under a car.", options: ["has found a kitten", "has lost a kitten", "will find a kitten"], answer: "has found a kitten" },
    ],
    speak: [
      { sentence: "One rainy morning a girl was walking to school.", vi: "Một buổi sáng mưa, một cô bé đang đi bộ tới trường." },
      { sentence: "Suddenly she found a small kitten under a car.", vi: "Đột nhiên cô bé thấy một chú mèo con dưới gầm xe." },
      { sentence: "Finally she took it home and felt very happy.", vi: "Cuối cùng cô bé mang nó về nhà và thấy rất vui." },
    ],
    write: [
      { hint: "Trạng từ mở đầu sự kiện bất ngờ", emoji: "⚡", answer: "suddenly" },
      { hint: "Trạng từ kết thúc câu chuyện", emoji: "🏁", answer: "finally" },
      { hint: "Cảm xúc khi lo lắng", emoji: "😟", answer: "worried" },
    ],
  },
  {
    slug: "food-and-drink",
    level: "starters",
    order: 4,
    title: "Food & Drink",
    titleVi: "Đồ ăn và thức uống",
    emoji: "🍎",
    summary: "Nói về món bé thích và không thích — chủ đề Food xuất hiện ở mọi đề Starters.",
    source: "Family and Friends 1 – Unit 7 · Cambridge YLE Starters wordlist (Food and drink)",
    video: { youtubeId: "frN3nvhIHUk", title: "Do You Like Broccoli Ice Cream? — Super Simple Songs" },
    extraVideos: [
      { youtubeId: "zXEq-QO3xTg", title: "The Animals On The Farm", channel: "Super Simple Songs" },
    ],
    vocab: [
      { word: "bread", ipa: "/bred/", vi: "bánh mì", emoji: "🍞" },
      { word: "milk", ipa: "/mɪlk/", vi: "sữa", emoji: "🥛" },
      { word: "rice", ipa: "/raɪs/", vi: "cơm", emoji: "🍚" },
      { word: "chicken", ipa: "/ˈtʃɪkɪn/", vi: "thịt gà", emoji: "🍗" },
      { word: "banana", ipa: "/bəˈnɑːnə/", vi: "quả chuối", emoji: "🍌" },
      { word: "water", ipa: "/ˈwɔːtə/", vi: "nước", emoji: "💧" },
      { word: "ice cream", ipa: "/ˈaɪs kriːm/", vi: "kem", emoji: "🍦" },
      { word: "vegetables", ipa: "/ˈvedʒtəblz/", vi: "rau củ", emoji: "🥦" },
    ],
    grammar: {
      title: "I like / I don't like — Do you like…?",
      formula: "S + like/don't like + N  ·  Do you like + N? — Yes, I do. / No, I don't.",
      note: "Với he/she dùng likes và doesn't like: She likes milk. He doesn't like rice.",
      examples: [
        { en: "I like bananas.", vi: "Tớ thích chuối." },
        { en: "I don't like vegetables.", vi: "Tớ không thích rau." },
        { en: "Do you like ice cream? Yes, I do.", vi: "Bạn thích kem không? Có." },
      ],
    },
    reading: {
      title: "My lunch box",
      chunks: [
        [
          { text: "I", role: "subject" },
          { text: "eat", role: "verb" },
          { text: "rice and chicken", role: "object" },
          { text: "at lunchtime", role: "adverb" },
        ],
        [
          { text: "My sister", role: "subject" },
          { text: "drinks", role: "verb" },
          { text: "milk", role: "object" },
          { text: "every morning", role: "adverb" },
        ],
        [
          { text: "We", role: "subject" },
          { text: "don't like", role: "verb" },
          { text: "green vegetables", role: "object" },
        ],
        [
          { text: "Mum", role: "subject" },
          { text: "makes", role: "verb" },
          { text: "banana ice cream", role: "object" },
          { text: "on Sunday", role: "adverb" },
        ],
      ],
      viTranslation:
        "Tớ ăn cơm với thịt gà vào buổi trưa. Em gái tớ uống sữa mỗi sáng. Chúng tớ không thích rau xanh. Mẹ làm kem chuối vào Chủ nhật.",
    },
    listen: [
      { prompt: "Nghe và chọn món ăn", say: "I eat rice and chicken.", options: ["rice", "bread", "milk"], answer: "rice" },
      { prompt: "Nghe và chọn đồ uống", say: "She drinks milk every morning.", options: ["milk", "water", "juice"], answer: "milk" },
      { prompt: "Nghe và chọn câu đúng", say: "I don't like vegetables.", options: ["don't like vegetables", "like vegetables", "like bananas"], answer: "don't like vegetables" },
    ],
    speak: [
      { sentence: "I like bananas and ice cream.", vi: "Tớ thích chuối và kem." },
      { sentence: "I don't like vegetables.", vi: "Tớ không thích rau." },
      { sentence: "Do you like milk? Yes, I do.", vi: "Bạn thích sữa không? Có." },
    ],
    write: [
      { hint: "Thức uống màu trắng", emoji: "🥛", answer: "milk" },
      { hint: "Món tráng miệng lạnh", emoji: "🍦", answer: "ice cream" },
      { hint: "Quả màu vàng dài", emoji: "🍌", answer: "banana" },
    ],
  },
  {
    slug: "my-body",
    level: "starters",
    order: 5,
    title: "My Body",
    titleVi: "Cơ thể của tớ",
    emoji: "🧍",
    summary: "Tên các bộ phận cơ thể và cách nói khi bị đau — dùng nhiều trong Speaking Part 2.",
    source: "Family and Friends 1 – Unit 5 · Kid's Box 1 – Unit 6 (My body)",
    video: { youtubeId: "SUt8q0EKbms", title: "My Body Parts — English Singsing" },
    extraVideos: [
      { youtubeId: "ZanHgPprl-0", title: "Head Shoulders Knees & Toes", channel: "Super Simple Songs" },
    ],
    vocab: [
      { word: "head", ipa: "/hed/", vi: "cái đầu", emoji: "🧠" },
      { word: "hand", ipa: "/hænd/", vi: "bàn tay", emoji: "✋" },
      { word: "foot", ipa: "/fʊt/", vi: "bàn chân", emoji: "🦶" },
      { word: "eye", ipa: "/aɪ/", vi: "mắt", emoji: "👁️" },
      { word: "ear", ipa: "/ɪə/", vi: "tai", emoji: "👂" },
      { word: "nose", ipa: "/nəʊz/", vi: "mũi", emoji: "👃" },
      { word: "hair", ipa: "/heə/", vi: "tóc", emoji: "💇" },
      { word: "tooth", ipa: "/tuːθ/", vi: "cái răng", emoji: "🦷" },
    ],
    grammar: {
      title: "Số nhiều bất quy tắc & have got",
      formula: "foot → feet · tooth → teeth · I have got two + N số nhiều",
      note: "Đừng viết foots hay tooths — đây là lỗi chính tả bị trừ điểm ở phần Reading & Writing.",
      examples: [
        { en: "I have got two feet.", vi: "Tớ có hai bàn chân." },
        { en: "She has got long hair.", vi: "Chị ấy có mái tóc dài." },
        { en: "My tooth hurts.", vi: "Răng tớ bị đau." },
      ],
    },
    reading: {
      title: "Look at me!",
      chunks: [
        [
          { text: "I", role: "subject" },
          { text: "have got", role: "verb" },
          { text: "two big eyes", role: "object" },
        ],
        [
          { text: "My hair", role: "subject" },
          { text: "is", role: "verb" },
          { text: "short and black", role: "object" },
        ],
        [
          { text: "I", role: "subject" },
          { text: "wash", role: "verb" },
          { text: "my hands", role: "object" },
          { text: "before dinner", role: "adverb" },
        ],
        [
          { text: "Today", role: "adverb" },
          { text: "my tooth", role: "subject" },
          { text: "hurts", role: "verb" },
        ],
      ],
      viTranslation:
        "Tớ có hai con mắt to. Tóc tớ ngắn và đen. Tớ rửa tay trước bữa tối. Hôm nay răng tớ bị đau.",
    },
    listen: [
      { prompt: "Nghe và chọn bộ phận", say: "I have got two big eyes.", options: ["eyes", "ears", "hands"], answer: "eyes" },
      { prompt: "Nghe và chọn số nhiều đúng", say: "I have got two feet.", options: ["feet", "foots", "foot"], answer: "feet" },
      { prompt: "Nghe và chọn câu đúng", say: "My hair is short and black.", options: ["short and black", "long and black", "short and brown"], answer: "short and black" },
    ],
    speak: [
      { sentence: "I have got two hands and two feet.", vi: "Tớ có hai bàn tay và hai bàn chân." },
      { sentence: "My hair is short and black.", vi: "Tóc tớ ngắn và đen." },
      { sentence: "I wash my hands before dinner.", vi: "Tớ rửa tay trước bữa tối." },
    ],
    write: [
      { hint: "Số nhiều của foot", emoji: "🦶", answer: "feet" },
      { hint: "Số nhiều của tooth", emoji: "🦷", answer: "teeth" },
      { hint: "Bộ phận để nghe", emoji: "👂", answer: "ear" },
    ],
  },
  {
    slug: "clothes-and-weather",
    level: "movers",
    order: 8,
    title: "Clothes & Weather",
    titleVi: "Quần áo và thời tiết",
    emoji: "🌦️",
    summary: "Mô tả thời tiết và chọn trang phục — dạng bài mô tả tranh quen thuộc của Movers.",
    source: "Family and Friends 2 – Unit 9 · Cambridge YLE Movers wordlist (Clothes, Weather)",
    video: { youtubeId: "rD6FRDd9Hew", title: "How's The Weather? — Super Simple Songs" },
    extraVideos: [
      { youtubeId: "Q_EwuVHDb5U", title: "Clothes — Kids Vocab", channel: "English Singsing" },
      { youtubeId: "I8GeA3anPdo", title: "How's the Weather Song", channel: "Maple Leaf Learning" },
    ],
    vocab: [
      { word: "sunny", ipa: "/ˈsʌni/", vi: "nắng", emoji: "☀️" },
      { word: "rainy", ipa: "/ˈreɪni/", vi: "mưa", emoji: "🌧️" },
      { word: "windy", ipa: "/ˈwɪndi/", vi: "có gió", emoji: "🌬️" },
      { word: "cloudy", ipa: "/ˈklaʊdi/", vi: "nhiều mây", emoji: "☁️" },
      { word: "jacket", ipa: "/ˈdʒækɪt/", vi: "áo khoác", emoji: "🧥" },
      { word: "boots", ipa: "/buːts/", vi: "ủng", emoji: "🥾" },
      { word: "shorts", ipa: "/ʃɔːts/", vi: "quần đùi", emoji: "🩳" },
      { word: "hat", ipa: "/hæt/", vi: "cái mũ", emoji: "🧢" },
    ],
    grammar: {
      title: "Hiện tại tiếp diễn & mệnh đề with when",
      formula: "S + am/is/are + V-ing  ·  When it is + thời tiết, S + wear(s) + N",
      note: "Hiện tại tiếp diễn tả việc đang xảy ra ngay lúc nói: It is raining now.",
      examples: [
        { en: "It is raining now.", vi: "Trời đang mưa." },
        { en: "She is wearing a red jacket.", vi: "Chị ấy đang mặc áo khoác đỏ." },
        { en: "When it is sunny, I wear shorts.", vi: "Khi trời nắng, tớ mặc quần đùi." },
      ],
    },
    reading: {
      title: "A rainy Monday",
      chunks: [
        [
          { text: "Today", role: "adverb" },
          { text: "it", role: "subject" },
          { text: "is raining", role: "verb" },
          { text: "in my town", role: "adverb" },
        ],
        [
          { text: "I", role: "subject" },
          { text: "am wearing", role: "verb" },
          { text: "a blue jacket and black boots", role: "object" },
        ],
        [
          { text: "My brother", role: "subject" },
          { text: "is playing", role: "verb" },
          { text: "a game", role: "object" },
          { text: "inside the house", role: "adverb" },
        ],
        [
          { text: "When it is sunny", role: "adverb" },
          { text: "we", role: "subject" },
          { text: "ride", role: "verb" },
          { text: "our bikes", role: "object" },
        ],
      ],
      viTranslation:
        "Hôm nay trời đang mưa ở thị trấn của tớ. Tớ đang mặc áo khoác xanh và đi ủng đen. Anh trai tớ đang chơi game trong nhà. Khi trời nắng, chúng tớ đạp xe.",
    },
    listen: [
      { prompt: "Nghe và chọn thời tiết", say: "Today it is raining in my town.", options: ["raining", "snowing", "sunny"], answer: "raining" },
      { prompt: "Nghe và chọn trang phục", say: "I am wearing a blue jacket.", options: ["jacket", "hat", "shorts"], answer: "jacket" },
      { prompt: "Nghe và chọn câu đúng", say: "When it is sunny we ride our bikes.", options: ["ride our bikes", "read our books", "ride the bus"], answer: "ride our bikes" },
    ],
    speak: [
      { sentence: "It is windy today.", vi: "Hôm nay trời có gió." },
      { sentence: "I am wearing a jacket and boots.", vi: "Tớ đang mặc áo khoác và đi ủng." },
      { sentence: "When it is sunny, I wear shorts and a hat.", vi: "Khi trời nắng, tớ mặc quần đùi và đội mũ." },
    ],
    write: [
      { hint: "Thời tiết khi có mặt trời", emoji: "☀️", answer: "sunny" },
      { hint: "Giày cao đi khi trời mưa", emoji: "🥾", answer: "boots" },
      { hint: "Thời tiết nhiều mây", emoji: "☁️", answer: "cloudy" },
    ],
  },
  {
    slug: "school-timetable",
    level: "movers",
    order: 9,
    title: "School & Timetable",
    titleVi: "Trường học và thời khoá biểu",
    emoji: "🏫",
    summary: "Thứ trong tuần, môn học và giờ giấc — nền cho phần nghe điền thời gian biểu.",
    source: "Kid's Box 3 – Unit 2 · Cambridge YLE Movers wordlist (School, Days of the week)",
    video: { youtubeId: "mXMofxtDPUQ", title: "Days of the Week Song — The Singing Walrus" },
    extraVideos: [
      { youtubeId: "P-uwIskha3M", title: "Theme — School (Subjects, Supplies & More)", channel: "English Singsing" },
      { youtubeId: "JoDm0RC5gk8", title: "School Subjects Song — What Do You Study at School?", channel: "Fun Kids English" },
    ],
    vocab: [
      { word: "Monday", ipa: "/ˈmʌndeɪ/", vi: "thứ Hai", emoji: "📅" },
      { word: "Friday", ipa: "/ˈfraɪdeɪ/", vi: "thứ Sáu", emoji: "🗓️" },
      { word: "maths", ipa: "/mæθs/", vi: "môn toán", emoji: "➗" },
      { word: "science", ipa: "/ˈsaɪəns/", vi: "môn khoa học", emoji: "🔬" },
      { word: "art", ipa: "/ɑːt/", vi: "môn mĩ thuật", emoji: "🎨" },
      { word: "playground", ipa: "/ˈpleɪɡraʊnd/", vi: "sân chơi", emoji: "🛝" },
      { word: "timetable", ipa: "/ˈtaɪmteɪbl/", vi: "thời khoá biểu", emoji: "📋" },
      { word: "break", ipa: "/breɪk/", vi: "giờ ra chơi", emoji: "⏰" },
    ],
    grammar: {
      title: "Giới từ thời gian on / at / in",
      formula: "on + thứ · at + giờ · in + buổi (the morning/afternoon)",
      note: "Ngoại lệ: at night, không nói in the night khi tả thói quen.",
      examples: [
        { en: "We have maths on Monday.", vi: "Chúng tớ học toán vào thứ Hai." },
        { en: "School starts at eight o'clock.", vi: "Trường bắt đầu lúc 8 giờ." },
        { en: "I play football in the afternoon.", vi: "Tớ chơi bóng đá vào buổi chiều." },
      ],
    },
    reading: {
      title: "My school week",
      chunks: [
        [
          { text: "My school", role: "subject" },
          { text: "starts", role: "verb" },
          { text: "at eight o'clock", role: "adverb" },
        ],
        [
          { text: "We", role: "subject" },
          { text: "have", role: "verb" },
          { text: "maths and science", role: "object" },
          { text: "on Monday", role: "adverb" },
        ],
        [
          { text: "I", role: "subject" },
          { text: "play", role: "verb" },
          { text: "with my friends", role: "object" },
          { text: "in the playground", role: "adverb" },
        ],
        [
          { text: "On Friday", role: "adverb" },
          { text: "our class", role: "subject" },
          { text: "paints", role: "verb" },
          { text: "big pictures", role: "object" },
        ],
      ],
      viTranslation:
        "Trường tớ bắt đầu lúc 8 giờ. Chúng tớ học toán và khoa học vào thứ Hai. Tớ chơi với các bạn ở sân chơi. Vào thứ Sáu, lớp tớ vẽ những bức tranh lớn.",
    },
    listen: [
      { prompt: "Nghe và chọn thứ", say: "We have maths on Monday.", options: ["Monday", "Sunday", "Friday"], answer: "Monday" },
      { prompt: "Nghe và chọn giờ", say: "My school starts at eight o'clock.", options: ["eight", "nine", "seven"], answer: "eight" },
      { prompt: "Nghe và chọn nơi chốn", say: "I play with my friends in the playground.", options: ["playground", "classroom", "library"], answer: "playground" },
    ],
    speak: [
      { sentence: "We have science on Wednesday.", vi: "Chúng tớ học khoa học vào thứ Tư." },
      { sentence: "School starts at eight o'clock.", vi: "Trường bắt đầu lúc 8 giờ." },
      { sentence: "My favourite subject is art.", vi: "Môn tớ thích nhất là mĩ thuật." },
    ],
    write: [
      { hint: "Ngày đầu tuần đi học", emoji: "📅", answer: "Monday" },
      { hint: "Môn học có số và phép tính", emoji: "➗", answer: "maths" },
      { hint: "Nơi bé chơi giờ ra chơi", emoji: "🛝", answer: "playground" },
    ],
  },
  {
    slug: "jobs-and-my-town",
    level: "flyers",
    order: 11,
    title: "Jobs & My Town",
    titleVi: "Nghề nghiệp và thị trấn của tớ",
    emoji: "🏙️",
    summary: "Nghề nghiệp, địa điểm trong thành phố và cách chỉ đường — chủ đề trọng tâm Flyers.",
    source: "Family and Friends 4 – Unit 3 · Cambridge YLE Flyers wordlist (Work, Places)",
    video: { youtubeId: "R69YKFmlcnA", title: "Jobs — Kids Vocab (English Singsing)" },
    extraVideos: [
      { youtubeId: "EfD2k9beP-4", title: "Around My Town", channel: "English Singsing" },
      { youtubeId: "x39KwsXxl_0", title: "Theme — City (Town, Jobs)", channel: "English Singsing" },
    ],
    vocab: [
      { word: "engineer", ipa: "/ˌendʒɪˈnɪə/", vi: "kĩ sư", emoji: "👷" },
      { word: "dentist", ipa: "/ˈdentɪst/", vi: "nha sĩ", emoji: "🦷" },
      { word: "journalist", ipa: "/ˈdʒɜːnəlɪst/", vi: "nhà báo", emoji: "📰" },
      { word: "library", ipa: "/ˈlaɪbrəri/", vi: "thư viện", emoji: "📚" },
      { word: "hospital", ipa: "/ˈhɒspɪtl/", vi: "bệnh viện", emoji: "🏥" },
      { word: "market", ipa: "/ˈmɑːkɪt/", vi: "chợ", emoji: "🛒" },
      { word: "opposite", ipa: "/ˈɒpəzɪt/", vi: "đối diện", emoji: "↔️" },
      { word: "between", ipa: "/bɪˈtwiːn/", vi: "ở giữa", emoji: "🔀" },
    ],
    grammar: {
      title: "Mệnh đề quan hệ với who / where",
      formula: "N (người) + who + V …  ·  N (nơi chốn) + where + S + V …",
      note: "who thay cho người, where thay cho nơi chốn — dạng câu định nghĩa rất hay gặp ở Flyers Reading Part 1.",
      examples: [
        { en: "A dentist is a person who looks after your teeth.", vi: "Nha sĩ là người chăm sóc răng cho bạn." },
        { en: "A library is a place where you borrow books.", vi: "Thư viện là nơi bạn mượn sách." },
        { en: "The market is opposite the hospital.", vi: "Chợ nằm đối diện bệnh viện." },
      ],
    },
    reading: {
      title: "People in my town",
      chunks: [
        [
          { text: "My aunt", role: "subject" },
          { text: "is", role: "verb" },
          { text: "a dentist", role: "object" },
          { text: "in a small hospital", role: "adverb" },
        ],
        [
          { text: "She", role: "subject" },
          { text: "helps", role: "verb" },
          { text: "children who have got toothache", role: "object" },
        ],
        [
          { text: "The library", role: "subject" },
          { text: "is", role: "verb" },
          { text: "between the market and the park", role: "adverb" },
        ],
        [
          { text: "Every Saturday", role: "adverb" },
          { text: "I", role: "subject" },
          { text: "borrow", role: "verb" },
          { text: "two story books", role: "object" },
        ],
      ],
      viTranslation:
        "Dì tớ là nha sĩ ở một bệnh viện nhỏ. Dì giúp các bạn nhỏ bị đau răng. Thư viện nằm giữa chợ và công viên. Mỗi thứ Bảy tớ mượn hai quyển truyện.",
    },
    listen: [
      { prompt: "Nghe và chọn nghề", say: "My aunt is a dentist.", options: ["dentist", "engineer", "journalist"], answer: "dentist" },
      { prompt: "Nghe và chọn vị trí", say: "The library is between the market and the park.", options: ["between", "opposite", "behind"], answer: "between" },
      { prompt: "Nghe và chọn câu đúng", say: "Every Saturday I borrow two story books.", options: ["borrow two books", "buy two books", "read ten books"], answer: "borrow two books" },
    ],
    speak: [
      { sentence: "A dentist is a person who looks after your teeth.", vi: "Nha sĩ là người chăm sóc răng cho bạn." },
      { sentence: "A library is a place where you borrow books.", vi: "Thư viện là nơi bạn mượn sách." },
      { sentence: "The market is opposite the hospital.", vi: "Chợ đối diện bệnh viện." },
    ],
    write: [
      { hint: "Người chữa răng", emoji: "🦷", answer: "dentist" },
      { hint: "Nơi mượn sách", emoji: "📚", answer: "library" },
      { hint: "Từ chỉ vị trí ở giữa hai nơi", emoji: "🔀", answer: "between" },
    ],
  },
  {
    slug: "comparing-things",
    level: "flyers",
    order: 12,
    title: "Comparing Things",
    titleVi: "So sánh sự vật",
    emoji: "📏",
    summary: "So sánh hơn và so sánh nhất — bắt buộc cho phần mô tả tranh và viết đoạn Flyers.",
    source: "Kid's Box 5 – Unit 4 · Fun for Flyers – Comparatives & superlatives",
    video: { youtubeId: "XTMT9BQU7j0", title: "The Superlatives Song — Biggest, Smallest, Fastest" },
    extraVideos: [
      { youtubeId: "jfSlzpe4hZU", title: "Song of the Comparative and Superlative Adjectives", channel: "English with Us" },
    ],
    vocab: [
      { word: "taller", ipa: "/ˈtɔːlə/", vi: "cao hơn", emoji: "📏" },
      { word: "heavier", ipa: "/ˈhevɪə/", vi: "nặng hơn", emoji: "⚖️" },
      { word: "the fastest", ipa: "/ðə ˈfɑːstɪst/", vi: "nhanh nhất", emoji: "🏃" },
      { word: "the most beautiful", ipa: "/ðə məʊst ˈbjuːtɪfl/", vi: "đẹp nhất", emoji: "🌸" },
      { word: "better", ipa: "/ˈbetə/", vi: "tốt hơn", emoji: "👍" },
      { word: "worse", ipa: "/wɜːs/", vi: "tệ hơn", emoji: "👎" },
      { word: "expensive", ipa: "/ɪkˈspensɪv/", vi: "đắt", emoji: "💰" },
      { word: "quiet", ipa: "/ˈkwaɪət/", vi: "yên tĩnh", emoji: "🤫" },
    ],
    grammar: {
      title: "So sánh hơn & so sánh nhất",
      formula: "tính từ ngắn + -er … than · the + tính từ ngắn + -est  |  more/most + tính từ dài",
      note: "Bất quy tắc: good → better → the best; bad → worse → the worst. Tính từ tận cùng -y đổi thành -ier (heavy → heavier).",
      examples: [
        { en: "My brother is taller than me.", vi: "Anh tớ cao hơn tớ." },
        { en: "This book is more interesting than that one.", vi: "Quyển sách này thú vị hơn quyển kia." },
        { en: "Nam is the fastest runner in my class.", vi: "Nam là bạn chạy nhanh nhất lớp tớ." },
      ],
    },
    reading: {
      title: "The three houses",
      chunks: [
        [
          { text: "My house", role: "subject" },
          { text: "is", role: "verb" },
          { text: "smaller than Nam's house", role: "object" },
        ],
        [
          { text: "Nam's house", role: "subject" },
          { text: "is", role: "verb" },
          { text: "the biggest", role: "object" },
          { text: "in our street", role: "adverb" },
        ],
        [
          { text: "But my garden", role: "subject" },
          { text: "is", role: "verb" },
          { text: "more beautiful", role: "object" },
          { text: "in spring", role: "adverb" },
        ],
        [
          { text: "I", role: "subject" },
          { text: "think", role: "verb" },
          { text: "a quiet house is better than a big house", role: "object" },
        ],
      ],
      viTranslation:
        "Nhà tớ nhỏ hơn nhà Nam. Nhà Nam là nhà to nhất trên phố. Nhưng khu vườn của tớ đẹp hơn vào mùa xuân. Tớ nghĩ một ngôi nhà yên tĩnh thì tốt hơn một ngôi nhà to.",
    },
    listen: [
      { prompt: "Nghe và chọn so sánh đúng", say: "My house is smaller than Nam's house.", options: ["smaller", "bigger", "older"], answer: "smaller" },
      { prompt: "Nghe và chọn so sánh nhất", say: "Nam's house is the biggest in our street.", options: ["the biggest", "the smallest", "the newest"], answer: "the biggest" },
      { prompt: "Nghe và chọn câu đúng", say: "A quiet house is better than a big house.", options: ["better than a big house", "worse than a big house", "as big as a house"], answer: "better than a big house" },
    ],
    speak: [
      { sentence: "My brother is taller than me.", vi: "Anh tớ cao hơn tớ." },
      { sentence: "This book is more interesting than that one.", vi: "Quyển sách này thú vị hơn quyển kia." },
      { sentence: "Nam is the fastest runner in my class.", vi: "Nam là bạn chạy nhanh nhất lớp tớ." },
    ],
    write: [
      { hint: "So sánh hơn của tall", emoji: "📏", answer: "taller" },
      { hint: "So sánh hơn của good", emoji: "👍", answer: "better" },
      { hint: "So sánh nhất của fast (có 'the')", emoji: "🏃", answer: "the fastest" },
    ],
  },
];

export const getLesson = (slug: string) => lessons.find((l) => l.slug === slug);

// ─────────────────────────────────────────────────────────────────────────────
// DỮ LIỆU CHÍNH THỨC TỪ CAMBRIDGE — trích từ PDF wordlist 2025 & handbook 2024
// Nguồn: 506166-starters-movers-flyers-word-list-2025.pdf
//        357180-starters-movers-and-flyers-handbook-for-teachers-2024.pdf
//        396158/396159/396160 — Picture Books (Starters/Movers/Flyers)
// ─────────────────────────────────────────────────────────────────────────────

// ── CẤU TRÚC ĐỀ THI CHÍNH XÁC (Handbook 2024, page 8) ────────────────────────

export type ExamPart = {
  part: number;
  questions: number;
  marks: number;
  taskType: string;
  description: string;
};

export type ExamStructure = {
  level: string;
  paper: string;
  duration: string;
  parts: ExamPart[];
  totalMarks: number;
};

export const examStructures: ExamStructure[] = [
  // ── Pre A1 Starters ──────────────────────────────────────────────────────
  {
    level: "Pre A1 Starters",
    paper: "Listening",
    duration: "approx 20 mins",
    totalMarks: 20,
    parts: [
      { part: 1, questions: 5, marks: 5, taskType: "Matching", description: "Draw lines to match names to people in a picture." },
      { part: 2, questions: 5, marks: 5, taskType: "Note-taking", description: "Write numbers and names in gaps." },
      { part: 3, questions: 5, marks: 5, taskType: "3-option multiple choice", description: "Tick correct box under pictures." },
      { part: 4, questions: 5, marks: 5, taskType: "Colouring", description: "Carry out instructions, locate objects, and colour correctly. (Colours: black, blue, brown, green, grey, orange, pink, purple, red, yellow)" },
    ],
  },
  {
    level: "Pre A1 Starters",
    paper: "Reading and Writing",
    duration: "20 mins",
    totalMarks: 25,
    parts: [
      { part: 1, questions: 5, marks: 5, taskType: "True/false vocabulary recognition", description: "Tick or cross to show if sentence is true or false." },
      { part: 2, questions: 5, marks: 5, taskType: "Reading comprehension based on a picture", description: "Write 'yes'/'no' to show if sentence is correct or not." },
      { part: 3, questions: 5, marks: 5, taskType: "Spelling", description: "Write words by unscrambling the letters." },
      { part: 4, questions: 5, marks: 5, taskType: "Multiple-choice cloze", description: "Choose and copy missing words." },
      { part: 5, questions: 5, marks: 5, taskType: "Answer questions based on a picture story", description: "Write one-word answers to questions." },
    ],
  },
  {
    level: "Pre A1 Starters",
    paper: "Speaking",
    duration: "3-5 mins",
    totalMarks: 0,
    parts: [
      { part: 1, questions: 0, marks: 0, taskType: "Interlocutor–candidate", description: "Point to the correct part of the big picture." },
      { part: 2, questions: 0, marks: 0, taskType: "Interlocutor–candidate", description: "Point to objects on a small picture card and answer questions." },
      { part: 3, questions: 0, marks: 0, taskType: "Interlocutor–candidate", description: "Answer personal questions (name, age, favourite things)." },
      { part: 4, questions: 0, marks: 0, taskType: "Interlocutor–candidate", description: "Answer questions about the picture card from Part 2." },
    ],
  },
  // ── A1 Movers ────────────────────────────────────────────────────────────
  {
    level: "A1 Movers",
    paper: "Listening",
    duration: "approx 25 mins",
    totalMarks: 25,
    parts: [
      { part: 1, questions: 5, marks: 5, taskType: "Matching", description: "Draw lines to match names to people in a picture." },
      { part: 2, questions: 5, marks: 5, taskType: "Note-taking", description: "Write words or numbers in gaps." },
      { part: 3, questions: 5, marks: 5, taskType: "3-option multiple choice", description: "Tick correct box under pictures." },
      { part: 4, questions: 5, marks: 5, taskType: "Matching", description: "Match pictures with illustrated word or name by writing letter in box." },
      { part: 5, questions: 5, marks: 5, taskType: "Colouring", description: "Carry out instructions, locate objects, and colour correctly." },
    ],
  },
  {
    level: "A1 Movers",
    paper: "Reading and Writing",
    duration: "30 mins",
    totalMarks: 35,
    parts: [
      { part: 1, questions: 6, marks: 6, taskType: "Matching", description: "Match words to definitions. Write one word next to each definition." },
      { part: 2, questions: 5, marks: 5, taskType: "Continuous dialogue with multiple-choice responses", description: "Complete a continuous dialogue by choosing the correct response (A–H)." },
      { part: 3, questions: 7, marks: 7, taskType: "Gapped text", description: "Read a short narrative and choose the correct word to complete the gaps. Choose the best title." },
      { part: 4, questions: 5, marks: 5, taskType: "Multiple-choice cloze", description: "Read a gapped factual text. Choose the correct word from a choice of three." },
      { part: 5, questions: 7, marks: 7, taskType: "Sentence completion based on a story", description: "Read a story and complete sentences by writing 1, 2, 3 or 4 words." },
      { part: 6, questions: 5, marks: 5, taskType: "Open cloze", description: "Read a short text and complete the gaps with own words. No answer options given." },
    ],
  },
  {
    level: "A1 Movers",
    paper: "Speaking",
    duration: "5-7 mins",
    totalMarks: 0,
    parts: [
      { part: 1, questions: 0, marks: 0, taskType: "Interlocutor–candidate", description: "Find the differences between two pictures." },
      { part: 2, questions: 0, marks: 0, taskType: "Interlocutor–candidate", description: "Tell a simple story based on four pictures." },
      { part: 3, questions: 0, marks: 0, taskType: "Interlocutor–candidate", description: "Identify the odd one out in four sets of pictures and say why." },
      { part: 4, questions: 0, marks: 0, taskType: "Interlocutor–candidate", description: "Answer personal questions (school, weekends, friends, hobbies)." },
    ],
  },
  // ── A2 Flyers ────────────────────────────────────────────────────────────
  {
    level: "A2 Flyers",
    paper: "Listening",
    duration: "approx 25 mins",
    totalMarks: 25,
    parts: [
      { part: 1, questions: 5, marks: 5, taskType: "Matching", description: "Draw lines to match names to people in a picture." },
      { part: 2, questions: 5, marks: 5, taskType: "Note-taking", description: "Write words or numbers in gaps." },
      { part: 3, questions: 5, marks: 5, taskType: "Matching", description: "Match pictures with illustrated word or name by writing letter in box." },
      { part: 4, questions: 5, marks: 5, taskType: "3-option multiple choice", description: "Tick correct box under pictures." },
      { part: 5, questions: 5, marks: 5, taskType: "Colouring and writing", description: "Carry out instructions, locate objects, colour correctly and write. (Colours: black, blue, brown, green, grey, orange, pink, purple, red, yellow)" },
    ],
  },
  {
    level: "A2 Flyers",
    paper: "Reading and Writing",
    duration: "40 mins",
    totalMarks: 48,
    parts: [
      { part: 1, questions: 10, marks: 10, taskType: "Matching words to definitions", description: "Read definitions and choose and copy the correct word next to them." },
      { part: 2, questions: 5, marks: 5, taskType: "Continuous dialogue with multiple-choice responses", description: "Complete a continuous dialogue by choosing the correct response (A–H)." },
      { part: 3, questions: 6, marks: 6, taskType: "Gapped text", description: "Read a short narrative and choose the correct word to complete the gaps. Choose the best title." },
      { part: 4, questions: 10, marks: 10, taskType: "Multiple-choice cloze", description: "Read a gapped factual text. Choose the correct word from a choice of three." },
      { part: 5, questions: 7, marks: 7, taskType: "Sentence completion based on a story", description: "Read a story and complete sentences by writing 1, 2, 3 or 4 words." },
      { part: 6, questions: 5, marks: 5, taskType: "Open cloze", description: "Read a short text and complete the gaps with own words. No answer options given." },
      { part: 7, questions: 1, marks: 5, taskType: "Productive writing", description: "Write a short story based on three pictures. 20+ words." },
    ],
  },
  {
    level: "A2 Flyers",
    paper: "Speaking",
    duration: "7-9 mins",
    totalMarks: 0,
    parts: [
      { part: 1, questions: 0, marks: 0, taskType: "Interlocutor–candidate", description: "Identify six differences between two similar pictures." },
      { part: 2, questions: 0, marks: 0, taskType: "Interlocutor–candidate", description: "Answer and ask questions about two people, objects or situations." },
      { part: 3, questions: 0, marks: 0, taskType: "Interlocutor–candidate", description: "Describe each picture in a sequence of five pictures." },
      { part: 4, questions: 0, marks: 0, taskType: "Interlocutor–candidate", description: "Answer personal questions (school, holidays, birthdays, family, hobbies)." },
    ],
  },
];

// ── GRAMMAR & STRUCTURES LIST (Handbook 2024, pages 29, 52, 77) ─────────────

export type GrammarStructure = {
  category: string;
  structure: string;
  example: string;
};

export type GrammarList = {
  level: string;
  note: string;
  items: GrammarStructure[];
};

export const grammarLists: GrammarList[] = [
  {
    level: "Pre A1 Starters",
    note: "Danh sách ngữ pháp và cấu trúc cơ bản cho cấp Starters.",
    items: [
      { category: "Nouns", structure: "Singular and plural including irregular plural forms, countable and uncountable and names", example: "Would you like an orange? / Lemons are yellow. / Pat has six mice. / I eat rice for lunch. / Nora is my friend." },
      { category: "Adjectives", structure: "Including possessive adjectives", example: "He's a small boy. / His name is Yusef." },
      { category: "Determiners", structure: "a / an / the / some / these", example: "It's a banana. / This is an apple. / Put the hat on the boy's head. / I want some milk. / These books are blue." },
      { category: "Pronouns", structure: "Including demonstrative, personal, and possessive interrogative pronouns and 'one'", example: "This is my car. / Can you see me? / Which is Anna? / Yes, please. I'd like one. / This is mine! / Is that yours?" },
      { category: "Verbs", structure: "Present simple (positive, negative, question, imperative and short-answer forms, including contractions)", example: "Nick is happy. / I don't like eggs. / Eat your lunch! / Is that your sister? Yes, it is." },
      { category: "Verbs", structure: "Present continuous (not with future reference)", example: "What are you doing? / The cat's sleeping." },
      { category: "Verbs", structure: "Can for ability", example: "The baby can wave." },
      { category: "Verbs", structure: "Can for requests/permission", example: "Can I have some birthday cake?" },
      { category: "Verbs", structure: "Have (got) for possession", example: "Have you got a pen? / She hasn't got a dog." },
      { category: "Adverbs", structure: "now / here / too", example: "I'm colouring it now. / My grandma lives here. / She lives here too." },
      { category: "Conjunctions", structure: "and", example: "I've got a pen and a pencil." },
      { category: "Prepositions of place and time", structure: "in / on / at / under / next to / behind / between / in front of", example: "Put the clock next to the picture. / We go to school in the morning." },
      { category: "Question words", structure: "Who / Where / How / How many / How old", example: "Who is that man? / Where is Alex?" },
      { category: "Impersonal you", structure: "How do you spell that?", example: "How do you spell that?" },
      { category: "Have + obj + inf", structure: "Lucy has a book to read.", example: "Lucy has a book to read." },
      { category: "ing forms as nouns", structure: "Swimming is good.", example: "Swimming is good." },
    ],
  },
  {
    level: "A1 Movers",
    note: "Danh sách ngữ pháp MỚI ở cấp Movers (cộng dồn với Starters).",
    items: [
      { category: "Indirect objects", structure: "Give it to the teacher!", example: "Give it to the teacher!" },
      { category: "Comparative and superlative adjectives", structure: "bigger than / the best", example: "Your house is bigger than mine. / Anna is my best friend." },
      { category: "Verbs", structure: "Past simple regular and irregular forms", example: "We went to the park yesterday. / Her father cooked lunch on Friday. / Did you go to the cinema? Yes, I did. / We didn't see the pirate at the party." },
      { category: "Verbs", structure: "Verb + infinitive", example: "I want to go home. / He started to laugh." },
      { category: "Verbs", structure: "Verb + ing", example: "I went riding on Saturday." },
      { category: "Verbs", structure: "Infinitive of purpose", example: "She went to town to buy a toothbrush." },
      { category: "Verbs", structure: "Want/ask someone to do something", example: "He wants the teacher to tell a story." },
      { category: "Verbs", structure: "Must for obligation / mustn't", example: "He must do his homework. / You mustn't give the rabbit cheese. / Must I get up now?" },
      { category: "Verbs", structure: "Have (got) to / had to", example: "I've got to go. / Do I have to go to bed now? / He had to draw a whale for homework." },
      { category: "Verbs", structure: "Shall for offers", example: "Shall I help you wash the car, Mum?" },
      { category: "Verbs", structure: "Could (past form of can)", example: "I could see some birds in the tree." },
      { category: "Adverbs", structure: "never / loudly / a lot / more quickly than / best", example: "She never eats meat. / He sang loudly. / My brother reads more quickly than my sister. / I like ice cream best." },
      { category: "Conjunctions", structure: "because", example: "I went home because I was tired." },
      { category: "Prepositions of time", structure: "after / on (days)", example: "She plays with her friends after school. / He plays badminton on Saturdays." },
      { category: "Question words", structure: "Why / When", example: "Why is he talking to her? / When does school start?" },
      { category: "Relative clauses", structure: "who / which / where", example: "Vicky is the girl who is riding a bike. / That is the DVD which my friend gave me. / This is the house where my friend lives." },
      { category: "What is/was the weather like?", structure: "What was the weather like last weekend?", example: "What was the weather like last weekend?" },
      { category: "What's the matter?", structure: "What's the matter? + body part + ache", example: "What's the matter, Daisy? Have you got a stomach-ache?" },
      { category: "How/What about + n or ing", structure: "How about going to the cinema?", example: "How about going to the cinema on Wednesday afternoon?" },
      { category: "When clauses (not with future meaning)", structure: "When he got home, he had his dinner.", example: "When he got home, he had his dinner." },
      { category: "Go for a + n", structure: "go for a drive / walk / swim", example: "Yesterday we went for a drive in my brother's new car." },
      { category: "Be called + n", structure: "A baby cat is called a kitten.", example: "A baby cat is called a kitten." },
      { category: "Be good at + n", structure: "She's very good at basketball.", example: "She's very good at basketball." },
      { category: "I think/know ...", structure: "I think he's very nice.", example: "I think he's very nice." },
    ],
  },
  {
    level: "A2 Flyers",
    note: "Danh sách ngữ pháp MỚI ở cấp Flyers (cộng dồn với Starters + Movers).",
    items: [
      { category: "Verbs", structure: "Past continuous (for interrupted actions and background setting)", example: "I was walking down the road when I saw her. / It was a very cold day and snow was falling." },
      { category: "Verbs", structure: "Present perfect", example: "Have you ever been to the circus? / He's just eaten his dinner." },
      { category: "Verbs", structure: "Be going to", example: "It isn't going to rain today." },
      { category: "Verbs", structure: "Will", example: "Will you do your homework this evening? / I won't buy her a CD because she doesn't like music." },
      { category: "Verbs", structure: "Might", example: "Vicky might come to the party." },
      { category: "Verbs", structure: "May", example: "The bus may not come today because there is a lot of snow." },
      { category: "Verbs", structure: "Shall for suggestions", example: "Shall we have a picnic in the park?" },
      { category: "Verbs", structure: "Could (for possibility)", example: "You could invite Robert to the football game." },
      { category: "Verbs", structure: "Should", example: "Should we take a towel to the swimming pool?" },
      { category: "Verbs", structure: "Tag questions", example: "That's John's book, isn't it?" },
      { category: "Adverbs", structure: "yet", example: "I haven't bought my brother's birthday present yet." },
      { category: "Conjunctions", structure: "so", example: "I didn't want to walk home so I went on the bus." },
      { category: "If clauses (in zero conditionals)", structure: "If it's sunny, we go swimming.", example: "If it's sunny, we go swimming." },
      { category: "Where clauses", structure: "My grandmother has forgotten where she put her glasses.", example: "My grandmother has forgotten where she put her glasses." },
      { category: "Before/after clauses (not with future reference)", structure: "I finished my homework before I played football.", example: "I finished my homework before I played football." },
      { category: "Be/look/sound/feel/taste/smell like", structure: "What's your new teacher like? / That sounds like the baby upstairs.", example: "What's your new teacher like? / That sounds like the baby upstairs. I think he's crying." },
      { category: "Make somebody/something + adj", structure: "That smell makes me hungry!", example: "That smell makes me hungry!" },
      { category: "What time ...?", structure: "What time does the film start?", example: "What time does the film start?" },
      { category: "What else/next?", structure: "What else shall I draw?", example: "What else shall I draw?" },
      { category: "See you soon/later/tomorrow etc.", structure: "See you next week, Mrs Ball!", example: "See you next week, Mrs Ball!" },
      { category: "Be made of", structure: "The toy is made of wood.", example: "The toy is made of wood." },
    ],
  },
];

// ── THEMATIC VOCABULARY LISTS (Handbook 2024, pages 79-84) ──────────────────

export type ThematicVocab = {
  theme: string;
  starters: string[];
  movers: string[];
  flyers: string[];
};

export const thematicVocabLists: ThematicVocab[] = [
  {
    theme: "Animals",
    starters: ["animal", "bear", "bee", "bird", "cat", "chicken", "cow", "crocodile", "dog", "donkey", "duck", "elephant", "fish", "frog", "giraffe", "goat", "hippo", "horse", "jellyfish", "lizard", "monkey", "mouse/mice", "pet", "polar bear", "sheep", "snake", "spider", "tail", "tiger", "zebra", "zoo"],
    movers: ["bat", "cage", "dolphin", "fly", "kangaroo", "kitten", "lion", "panda", "parrot", "penguin", "puppy", "rabbit", "shark", "snail", "whale"],
    flyers: ["beetle", "butterfly", "camel", "creature", "dinosaur", "eagle", "extinct", "fur", "insect", "nest", "octopus", "swan", "tortoise", "wild", "wing"],
  },
  {
    theme: "The body and the face",
    starters: ["arm", "body", "ear", "eye", "face", "foot/feet", "hair", "hand", "head", "leg", "mouth", "nose", "smile"],
    movers: ["back", "beard", "blond(e)", "curly", "fair", "fat", "moustache", "neck", "shoulder", "stomach", "thin", "tooth/teeth"],
    flyers: ["elbow", "finger", "knee", "toe"],
  },
  {
    theme: "Clothes",
    starters: ["bag", "baseball cap", "boots", "clothes", "dress", "glasses", "handbag", "hat", "jacket", "jeans", "shirt", "shoe", "shorts", "skirt", "sock", "trousers", "T-shirt", "wear"],
    movers: ["coat", "helmet", "scarf", "sweater", "swimsuit"],
    flyers: ["belt", "bracelet", "costume", "crown", "glove", "necklace", "pajamas", "pocket", "pyjamas", "ring", "spot", "spotted", "stripe", "striped", "sunglasses", "trainers", "umbrella", "uniform"],
  },
  {
    theme: "Colours",
    starters: ["black", "blue", "brown", "colour", "gray", "green", "grey", "orange", "pink", "purple", "red", "white", "yellow"],
    movers: [],
    flyers: ["gold", "silver", "spot", "spotted", "stripe", "striped"],
  },
  {
    theme: "Family & friends",
    starters: ["baby", "boy", "brother", "child/children", "classmate", "cousin", "dad", "family", "father", "friend", "girl", "grandfather", "grandma", "grandmother", "grandpa", "kid", "live", "man/men", "mother", "mum", "old", "person/people", "sister", "woman/women", "young"],
    movers: ["aunt", "daughter", "granddaughter", "grandparent", "grandson", "grown-up", "parent", "son", "uncle"],
    flyers: ["husband", "married", "surname", "wife"],
  },
  {
    theme: "Food & drink",
    starters: ["apple", "banana", "bean", "bread", "breakfast", "burger", "cake", "candy", "carrot", "chicken", "chips", "chocolate", "coconut", "dinner", "drink", "eat", "egg", "fish", "food", "fries", "fruit", "grape", "ice cream", "juice", "kiwi", "lemon", "lemonade", "lime", "lunch", "mango", "meat", "meatballs", "milk", "onion", "orange", "pea", "pear", "pie", "pineapple", "potato", "rice", "sausage", "sweet(s)", "tomato", "water", "watermelon"],
    movers: ["bottle", "bowl", "cheese", "coffee", "cup", "glass", "hungry", "milkshake", "noodles", "pancake", "pasta", "picnic", "plate", "salad", "sandwich", "sauce", "soup", "tea", "thirsty", "vegetable"],
    flyers: ["biscuit", "butter", "cereal", "chopsticks", "cookie", "flour", "fork", "honey", "jam", "knife", "meal", "olives", "pepper", "piece", "pizza", "salt", "smell", "snack", "spoon", "strawberry", "sugar", "taste", "yoghurt"],
  },
  {
    theme: "Health",
    starters: ["cold", "cough", "cry", "dentist", "doctor", "fall", "fine", "headache", "hospital", "ill", "matter", "nurse", "sick", "stomach-ache", "temperature", "tired", "toothache"],
    movers: ["earache", "hurt"],
    flyers: ["bandage", "chemist('s)", "cut", "fall over", "medicine", "x-ray"],
  },
  {
    theme: "The home",
    starters: ["apartment", "armchair", "bath", "bathroom", "bed", "bedroom", "bookcase", "box", "camera", "chair", "clock", "computer", "cupboard", "desk", "dining room", "doll", "door", "flat", "flower", "garden", "hall", "home", "house", "kitchen", "lamp", "living room", "mat", "mirror", "phone", "picture", "radio", "room", "rug", "sleep", "sofa", "table", "television/TV", "toy", "tree", "TV", "wall", "watch", "window"],
    movers: ["address", "balcony", "basement", "blanket", "downstairs", "dream", "elevator", "floor", "internet", "lift", "message", "roof", "seat", "shower", "stair(s)", "toothbrush", "toothpaste", "towel", "upstairs", "wash"],
    flyers: ["brush", "comb", "cooker", "cushion", "diary", "entrance", "envelope", "fridge", "gate", "key", "letter", "oven", "screen", "shampoo", "shelf", "soap", "stamp", "step", "swing", "telephone"],
  },
  {
    theme: "Materials",
    starters: ["paper"],
    movers: ["card", "glass", "metal"],
    flyers: ["gold", "plastic", "silver", "wood", "wool"],
  },
  {
    theme: "Numbers",
    starters: ["1–20"],
    movers: ["21–100", "1st–20th", "hundred", "pair"],
    flyers: ["101–1,000", "21st–31st", "million", "several", "thousand"],
  },
  {
    theme: "Places & directions",
    starters: ["behind", "between", "bookshop", "end", "here", "in", "in front of", "on", "park", "playground", "shop", "store", "street", "there", "under", "zoo"],
    movers: ["above", "below", "building", "bus station", "bus stop", "café", "car park", "centre", "cinema", "circle", "circus", "city/town centre", "farm", "funfair", "hospital", "library", "map", "market", "near", "opposite", "place", "shopping centre", "sports centre", "square", "station", "straight", "supermarket", "swimming pool", "town"],
    flyers: ["airport", "bank", "bridge", "castle", "chemist('s)", "club", "college", "corner", "east", "factory", "fire station", "front", "get to", "hotel", "kilometre", "left", "London", "middle", "museum", "north", "over", "path", "police station", "post office", "restaurant", "right", "skyscraper", "south", "stadium", "straight on", "theatre", "university", "way", "west"],
  },
  {
    theme: "Sports & leisure",
    starters: ["badminton", "ball", "baseball", "basketball", "bat", "beach", "bike", "boat", "book", "bounce", "camera", "catch", "doll", "draw", "drawing", "drive", "enjoy", "favourite", "fishing", "fly", "football", "game", "guitar", "hobby", "hockey", "jump", "kick", "kite", "listen", "music", "photo", "piano", "picture", "play", "radio", "read", "ride", "run", "sing", "skateboard", "skateboarding", "soccer", "song", "sport", "story", "swim", "table tennis", "take a photo", "television/TV", "tennis", "tennis racket", "throw", "toy", "TV", "walk", "watch"],
    movers: ["band", "CD", "cinema", "comic", "comic book", "dance", "drive", "DVD", "email", "film", "fish", "go shopping", "goal", "holiday", "hop", "ice skates", "ice skating", "kick", "movie", "net", "party", "player", "pool", "practice", "practise", "present", "ride", "roller skates", "roller skating", "sail", "score", "skate", "skip", "sports centre", "swim", "swimming pool", "text", "towel", "video", "walk"],
    flyers: ["backpack", "cartoon", "channel", "chess", "collect", "concert", "diary", "drum", "festival", "flashlight", "golf", "hotel", "instrument", "invitation", "join", "magazine", "match", "meet", "member", "online", "pop music", "prize", "programme", "puzzle", "pyramid", "quiz", "race", "rock music", "rucksack", "score", "ski", "sledge", "snowball", "snowboard", "snowboarding", "snowman", "stage", "suitcase", "swing", "team", "tent", "torch", "tune", "tyre", "umbrella", "violin", "volleyball", "winner"],
  },
  {
    theme: "Time",
    starters: ["afternoon", "birthday", "clock", "day", "evening", "in", "morning", "night", "today", "watch", "year"],
    movers: ["after", "always", "before", "every", "never", "o'clock", "sometimes", "week", "weekend", "yesterday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    flyers: ["a.m.", "after", "ago", "autumn", "before", "calendar", "century", "date", "early", "end", "fall", "future", "hour", "how long", "late", "later", "midday", "midnight", "minute", "month", "p.m.", "past", "quarter", "spring", "summer", "time", "tomorrow", "tonight", "winter", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  },
  {
    theme: "Toys",
    starters: ["alien", "ball", "balloon", "baseball", "basketball", "bike", "board game", "boat", "car", "doll", "football", "game", "helicopter", "lorry", "monster", "motorbike", "plane", "robot", "soccer", "teddy", "toy", "train", "truck"],
    movers: ["model"],
    flyers: [],
  },
  {
    theme: "Transport",
    starters: ["bike", "boat", "bus", "car", "drive", "fly", "go", "helicopter", "lorry", "motorbike", "plane", "ride", "run", "ship", "swim", "train", "truck"],
    movers: ["bus station", "bus stop", "drive", "driver", "ride", "station", "ticket", "tractor", "trip"],
    flyers: ["ambulance", "bicycle", "fire engine", "journey", "lift", "motorway", "passenger", "platform", "racing", "railway", "rocket", "spaceship", "taxi", "tour", "traffic", "wheel"],
  },
  {
    theme: "Weather",
    starters: ["sun"],
    movers: ["cloud", "cloudy", "ice", "rain", "rainbow", "sky", "snow", "sunny", "weather", "wind", "windy"],
    flyers: ["fog", "foggy", "storm"],
  },
  {
    theme: "Work",
    starters: ["teacher", "circus", "clown", "cook", "dentist", "doctor", "driver", "farmer", "film star", "hospital", "nurse", "pirate", "pop star", "work"],
    movers: [],
    flyers: ["actor", "airport", "ambulance", "artist", "astronaut", "business", "businessman/woman", "designer", "engineer", "factory", "fire engine", "fire fighter", "job", "journalist", "manager", "mechanic", "meeting", "news", "newspaper", "office", "photographer", "pilot", "police officer", "police station", "queen", "rocket", "singer", "taxi", "waiter"],
  },
  {
    theme: "The world around us",
    starters: ["beach", "sand", "sea", "shell", "street", "sun", "tree", "water"],
    movers: ["building", "city", "country", "countryside", "field", "forest", "grass", "ground", "island", "lake", "leaf/leaves", "moon", "mountain", "plant", "river", "road", "rock", "sky", "star", "town", "village", "waterfall", "wave", "world"],
    flyers: ["air", "bridge", "castle", "cave", "desert", "Earth", "entrance", "environment", "exit", "fire", "future", "hill", "land", "ocean", "planet", "pond", "space", "stone", "stream", "view", "wood"],
  },
];

// ── CHỦ ĐỀ PICTURE BOOKS THEO TỪNG CẤP (Cambridge Picture Books 2018) ────────

export type PictureBookTopic = {
  level: string;
  topics: { title: string; vocab: string[] }[];
};

export const pictureBookTopics: PictureBookTopic[] = [
  {
    level: "Pre A1 Starters",
    topics: [
      { title: "My body", vocab: ["leg", "hair", "body", "head", "ear", "eye", "face", "nose", "mouth", "smile", "arm", "hand", "foot", "feet"] },
      { title: "At the zoo", vocab: ["hippo", "giraffe", "snake", "crocodile", "elephant", "spider", "dog", "tail", "animal", "mouse/mice", "tiger", "frog", "sheep", "monkey", "lizard", "goat", "duck", "chicken", "bird", "cow", "horse"] },
      { title: "At the clothes shop", vocab: ["purple glasses", "brown bag", "black hat", "clothes", "blue jacket", "white skirt", "shoe", "sock", "pink handbag", "watch", "angry man", "grey trousers", "yellow shirt", "orange dress", "red T-shirt", "green jeans"] },
      { title: "My friend's birthday", vocab: ["robot", "monster", "person", "men", "man", "people", "woman", "baby", "children", "child", "boy", "girl", "women", "give a toy", "balloon", "alien", "dad/father", "grandfather/grandpa", "grandmother/grandma", "family", "cousin", "sister", "brother", "mum/mother"] },
      { title: "My favourite food", vocab: ["apple", "banana", "grapes", "fish", "beans", "egg", "milk", "tomato", "onion", "rice", "peas", "coconut", "breakfast", "dinner", "meat", "potato", "sausage", "orange", "lemon", "lime", "mango", "pear", "pineapple", "water", "fruit", "bread", "burger", "cake", "lunch", "candy", "carrot", "chips", "chocolate", "lemonade", "ice cream", "chicken", "watermelon", "drink", "juice"] },
      { title: "At home", vocab: ["doll", "bath", "mirror", "bookcase", "chair", "table", "window", "picture", "kitchen", "clock", "box", "radio", "cupboard", "dining room", "apartment/flat", "house/home", "bedroom", "bed", "bathroom", "cat", "garden", "flower", "wall", "hall", "phone", "door", "lamp", "sofa", "painting", "rug", "television/TV", "armchair", "living room", "room"] },
      { title: "At school", vocab: ["alphabet", "floor", "page", "letter", "class", "board", "pencil", "pen", "eraser/rubber", "ruler", "draw", "teacher", "classroom", "football/soccer", "hockey", "line", "part", "book", "basketball", "close", "open", "computer", "desk", "music", "tick", "cross", "keyboard", "mouse"] },
      { title: "At the beach", vocab: ["guitar", "jump", "piano", "baseball", "hit a ball", "table tennis", "camera", "take a photo", "walk", "sing a song", "paint", "fishing", "kick a ball", "badminton", "tennis", "sport", "sand", "sea", "swim", "kite", "shell", "sun", "throw a ball", "catch a ball"] },
      { title: "My street", vocab: ["street", "house", "shop", "lorry/truck", "plane", "helicopter", "motorbike", "bus", "car", "bike", "ball", "kite", "tree", "flower"] },
    ],
  },
  {
    level: "A1 Movers",
    topics: [
      { title: "A favourite toy shop", vocab: ["kitten", "tall clown", "bear", "pet puppy", "kangaroo", "dolphin", "rabbit", "lion", "pirate", "whale", "skates", "shark", "roof", "comic book", "farmer", "parrot", "panda", "cage"] },
      { title: "The party", vocab: ["cup", "glass", "bowl", "grown-up", "plate", "fly", "cheese", "bottle", "quiet", "message", "blonde hair", "son", "grandson", "hide", "cry", "daughter", "granddaughter", "parent", "grandparent"] },
      { title: "At the doctor's", vocab: ["doctor", "curly moustache", "earache", "back", "hurt", "shoulder", "better", "cold", "fat", "thin", "plant", "cough", "stomach", "teeth", "tooth", "headache", "neck", "nurse", "cup of tea"] },
      { title: "Uncle Charlie's hotel", vocab: ["road", "address", "pool", "dry", "upstairs", "downstairs", "awake", "shower", "blanket", "wash", "elevator/lift", "first floor", "map", "call", "seat", "towel"] },
      { title: "From the countryside to the jungle", vocab: ["ticket", "rock", "city", "island", "forest", "bus stop", "ground", "tractor", "driver", "sandwich", "salad", "mountain", "snow", "top", "cloud", "grass", "field", "jungle", "river", "skate", "town", "rainbow", "treasure", "bus station", "vegetable", "waterfall", "lake", "leaf/leaves", "plant"] },
      { title: "The weather", vocab: ["snow", "windy", "wind", "storm", "cloudy", "sunny", "cloud", "rain"] },
      { title: "Our town", vocab: ["straight", "square", "centre", "sports centre", "station", "market", "city centre", "café", "places", "drop", "supermarket", "shopping centre", "library", "carry", "circle", "slow"] },
      { title: "Dreaming of holidays", vocab: ["dream", "holiday", "beach", "sand", "sea", "sun", "island", "boat", "fly", "plane", "helicopter"] },
    ],
  },
  {
    level: "A2 Flyers",
    topics: [
      { title: "Meet the Flyers", vocab: ["dictionary", "letter", "flag", "stripe", "umbrella", "plastic", "sunglasses", "ring", "necklace", "striped", "shorts", "uniform", "spotted", "glove", "metal", "key", "pocket", "silver", "spot", "expensive", "rucksack", "bicycle", "telephone", "backpack", "belt"] },
      { title: "Autumn/Fall", vocab: ["medicine", "fall over", "cut", "fridge", "chemist", "salt", "pepper", "meal", "honey", "jam", "burn", "piece", "pizza", "flour"] },
      { title: "Flyers fun day", vocab: ["concert", "singer", "drum", "crown", "octopus", "violin", "instruments", "king", "queen", "stage", "actors", "artists"] },
      { title: "Winter", vocab: ["snowman", "snowboarding", "chess", "married", "magazine", "calendar", "ski", "snowball", "skiing"] },
      { title: "Flyers party", vocab: ["waiter", "delicious", "butter", "biscuits/cookies", "knife", "fork", "spoon", "chopsticks", "sugar"] },
      { title: "Spring", vocab: ["swan", "wing", "insect", "butterfly", "bridge", "gate", "glass", "metal", "plastic", "wood", "nest"] },
      { title: "Flyers adventure", vocab: ["cave", "fast", "backpack", "north", "south", "east", "west", "castle", "passenger", "taxi", "airport", "suitcase", "railway", "timetable", "tent", "hotel", "tour", "traffic", "desert", "pyramid", "camel", "museum"] },
      { title: "Summer", vocab: ["postcard", "police officers", "envelope", "police station", "stamp", "factory", "mechanic", "fire station", "fire fighter", "fire engine", "ambulance", "office", "businessman", "businesswoman", "pilot", "astronaut", "rocket", "engineer"] },
      { title: "Tomorrow is the A2 Flyers exam day", vocab: ["exam", "nervous", "excited", "ready", "timetable", "study", "prepare"] },
    ],
  },
];

// ── CAN DO SUMMARY (Handbook 2024, pages 9-10) ──────────────────────────────

export type CanDoStatement = {
  level: string;
  skill: "Listening & Speaking" | "Reading & Writing";
  statements: string[];
};

export const canDoStatements: CanDoStatement[] = [
  {
    level: "Pre A1 Starters",
    skill: "Listening & Speaking",
    statements: [
      "CAN understand letters of the English alphabet when heard",
      "CAN understand some simple spoken instructions given in short, simple phrases",
      "CAN understand some simple spoken questions about self – such as name, age, favourite things or daily routine",
      "CAN understand some very simple spoken descriptions of people – such as name, gender, age, mood, appearance or what they are doing",
      "CAN understand some very simple spoken descriptions of everyday objects – such as how many, colour, size or location",
      "CAN understand some very short conversations that use familiar questions and answers",
      "CAN name some familiar people or things – such as family, animals, and school or household objects",
      "CAN give very basic descriptions of some objects and animals – such as how many, colour, size or location",
      "CAN respond to very simple questions with single words or a 'yes/no' response",
    ],
  },
  {
    level: "Pre A1 Starters",
    skill: "Reading & Writing",
    statements: [
      "CAN read and understand some simple sentences, including questions",
      "CAN follow some very short stories written in very simple language",
      "CAN write the letters of the English alphabet",
      "CAN write name using the English alphabet",
      "CAN copy words, phrases and short sentences",
      "CAN spell some very simple words correctly",
    ],
  },
  {
    level: "A1 Movers",
    skill: "Listening & Speaking",
    statements: [
      "CAN understand very simple spoken dialogues about familiar topics with the help of pictures",
      "CAN understand very simple spoken descriptions about people and objects",
      "CAN express agreement or disagreement with someone using short, simple phrases",
      "CAN respond to questions on familiar topics with simple phrases and sentences",
      "CAN give simple descriptions of objects, pictures and actions",
      "CAN tell a very simple story with the help of pictures",
      "CAN ask someone how they are and ask simple questions about habits and preferences",
    ],
  },
  {
    level: "A1 Movers",
    skill: "Reading & Writing",
    statements: [
      "CAN understand some simple signs and notices",
      "CAN read and understand some short factual texts with the help of pictures",
      "CAN read and understand some short, simple stories about familiar topics with the help of pictures",
      "CAN write short, simple phrases and sentences about pictures and familiar topics",
      "CAN write simple sentences giving personal details",
      "CAN write short, simple sentences about likes and dislikes",
    ],
  },
  {
    level: "A2 Flyers",
    skill: "Listening & Speaking",
    statements: [
      "CAN understand instructions given in more than one sentence",
      "CAN understand simple spoken descriptions of objects, people and events",
      "CAN understand simple conversations on everyday topics",
      "CAN ask basic questions about everyday topics",
      "CAN tell short, simple stories using pictures or own ideas",
      "CAN give simple descriptions of objects, pictures and actions",
      "CAN talk briefly about activities done in the past",
    ],
  },
  {
    level: "A2 Flyers",
    skill: "Reading & Writing",
    statements: [
      "CAN understand simple written descriptions of objects, people and events",
      "CAN understand simple, short stories containing narrative tenses",
      "CAN read and understand short texts, even if some words are unknown",
      "CAN link phrases or sentences with connectors like 'and', 'because' and 'then'",
      "CAN write simple descriptions of objects, pictures and actions",
      "CAN write a short, simple story using pictures or own ideas",
    ],
  },
];

// ── NAMES THEO TỪNG CẤP (Wordlist 2025 — candidates must recognise & write) ─

export const examNames: { level: string; names: string[] }[] = [
  { level: "Pre A1 Starters", names: ["Alex", "Alice", "Ann/Anna", "Ben", "Bill", "Dan", "Eva", "Grace", "Hugo", "Jill", "Kim", "Lucy", "Mark", "Matt", "May", "Nick", "Pat", "Sam", "Sue", "Tom"] },
  { level: "A1 Movers", names: ["Charlie", "Clare", "Daisy", "Fred", "Jack", "Jane", "Jim", "Julia", "Lily", "Mary", "Paul", "Peter", "Sally", "Vicky", "Zoe"] },
  { level: "A2 Flyers", names: ["Betty", "David", "Emma", "Frank", "George", "Harry", "Helen", "Holly", "Katy", "Michael", "Oliver", "Richard", "Robert", "Sarah", "Sophia", "William"] },
];

// ── COLOURS cho bài Colouring (Listening Part 4/5) ──────────────────────────
// Handbook 2024: Range of colours is: black, blue, brown, green, grey, orange, pink, purple, red, yellow

export const examColours = [
  "black", "blue", "brown", "green", "grey", "orange", "pink", "purple", "red", "yellow",
] as const;


export type ResourceLink = {
  name: string;
  use: string;
  fee: string;
  url: string;
};

export const resourceLinks: ResourceLink[] = [
  {
    name: "Cambridge YLE Wordlists & Handbook",
    use: "Danh sách từ vựng chính thức Starters – Movers – Flyers",
    fee: "Miễn phí",
    url: "https://www.cambridgeenglish.org/exams-and-tests/young-learners-english/",
  },
  {
    name: "British Council LearnEnglish Kids",
    use: "Game, bài hát, worksheet bám sát A1–A2",
    fee: "Miễn phí",
    url: "https://learnenglishkids.britishcouncil.org/",
  },
  {
    name: "Oxford Owl for Home",
    use: "Thư viện ebook có audio, phân cấp Oxford Reading Tree",
    fee: "Miễn phí",
    url: "https://www.oxfordowl.co.uk/",
  },
  {
    name: "Family and Friends (Oxford)",
    use: "Giáo trình chính, cân bằng 4 kỹ năng",
    fee: "Sách in",
    url: "https://elt.oup.com/student/familyandfriends/",
  },
  {
    name: "Kid's Box (Cambridge)",
    use: "Giáo trình bám sát trực tiếp khung YLE",
    fee: "Sách in",
    url: "https://www.cambridge.org/gb/cambridgeenglish/catalog/primary/kids-box-new-generation",
  },
  {
    name: "Fun for Starters / Movers / Flyers",
    use: "Sách luyện thi chính 4–6 tháng cuối mỗi cấp",
    fee: "Sách in",
    url: "https://www.cambridge.org/gb/cambridgeenglish/catalog/cambridge-english-exams-ielts/fun-starters-movers-and-flyers-fourth-edition",
  },
];

export const youtubeChannels = [
  {
    name: "Super Simple Songs",
    note: "Bài hát chuẩn phát âm cho Starters",
    url: "https://www.youtube.com/@SuperSimpleSongs",
  },
  {
    name: "English Singsing",
    note: "Hội thoại và từ vựng theo chủ đề, hợp Movers",
    url: "https://www.youtube.com/@EnglishSingsing",
  },
  {
    name: "Alphablocks",
    note: "Phonics ghép vần cho giai đoạn nền móng",
    url: "https://www.youtube.com/@officialalphablocks",
  },
  {
    name: "Numberblocks",
    note: "Số đếm và toán bằng tiếng Anh",
    url: "https://www.youtube.com/@Numberblocks",
  },
  {
    name: "Peppa Pig — Official",
    note: "Hội thoại Anh–Anh đời thường",
    url: "https://www.youtube.com/@PeppaPigOfficial",
  },
  {
    name: "British Council LearnEnglish Kids",
    note: "Truyện và bài hát bám khung CEFR",
    url: "https://www.youtube.com/@LearnEnglishKids",
  },
  {
    name: "Steve and Maggie (WattsEnglish)",
    note: "Nghe hiểu tự nhiên, ngữ điệu Anh–Anh cho Movers",
    url: "https://www.youtube.com/@WattsEnglish",
  },
  {
    name: "The Singing Walrus",
    note: "Bài hát từ vựng và ngữ pháp chuẩn phát âm",
    url: "https://www.youtube.com/@TheSingingWalrus",
  },
  {
    name: "Fun Kids English",
    note: "Bài hát chủ đề bám wordlist Starters–Movers",
    url: "https://www.youtube.com/@FunKidsEnglish",
  },
  {
    name: "Dream English Kids",
    note: "Bài hát phonics, màu sắc, số đếm cho bé mới bắt đầu",
    url: "https://www.youtube.com/@DreamEnglishKids",
  },
  {
    name: "Maple Leaf Learning",
    note: "Bài hát ngữ pháp và từ vựng, giọng chậm rõ",
    url: "https://www.youtube.com/@MapleLeafLearning",
  },
];

export const syllabus = [
  {
    level: "starters" as const,
    book: "Family and Friends 1–2 (Oxford) · Kid's Box 1–2 (Cambridge)",
    units: "Colours & numbers · Family · Animals · Food & drink · My body · Toys · The classroom",
    exam: "Fun for Starters (4th ed.) 4 tháng cuối",
  },
  {
    level: "movers" as const,
    book: "Family and Friends 2–3 (Oxford) · Kid's Box 3–4 (Cambridge)",
    units: "Daily routine · Past simple · Clothes & weather · School timetable · Sports · Holidays",
    exam: "Fun for Movers (4th ed.) 5 tháng cuối",
  },
  {
    level: "flyers" as const,
    book: "Family and Friends 4–5 (Oxford) · Kid's Box 5–6 (Cambridge)",
    units:
      "Jobs & town · Comparatives · Present perfect · Storytelling · The world around us · Health",
    exam: "Fun for Flyers (4th ed.) 6 tháng cuối",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// TÀI LIỆU CAMBRIDGE MIỄN PHÍ — link tải trực tiếp từ cambridgeenglish.org
// (đã kiểm tra còn hoạt động, cập nhật 08/2026)
// ─────────────────────────────────────────────────────────────────────────────

export type Download = {
  name: string;
  desc: string;
  level: "Tất cả cấp" | "Starters" | "Movers" | "Flyers";
  type: "PDF" | "PDF + Audio" | "Trang web";
  url: string;
};

export const cambridgeDownloads: Download[] = [
  {
    name: "YLE Wordlists — Starters · Movers · Flyers (bản 2018)",
    desc: "Danh sách từ vựng chính thức của cả 3 cấp: theo bảng chữ cái + theo chủ đề + ngữ pháp. Đây là 'bản đồ' xác định bé cần học đúng bao nhiêu từ.",
    level: "Tất cả cấp",
    type: "PDF",
    url: "https://www.cambridgeenglish.org/Images/506166-starters-movers-flyers-word-list-2018.pdf",
  },
  {
    name: "YLE Wordlists — bản cập nhật mới nhất",
    desc: "Bản wordlist mới nhất của Cambridge, có đánh dấu từ thêm/bớt so với bản 2018.",
    level: "Tất cả cấp",
    type: "PDF",
    url: "https://www.cambridgeenglish.org/Images/506166-starters-movers-flyers-word-list-2025.pdf",
  },
  {
    name: "Starters Wordlist Picture Book",
    desc: "500 từ Starters minh họa bằng tranh theo chủ đề — in ra làm sách từ vựng cho bé.",
    level: "Starters",
    type: "PDF",
    url: "https://www.cambridgeenglish.org/Images/396158-yle-starters-word-list-picture-book-2018.pdf",
  },
  {
    name: "Movers Wordlist Picture Book",
    desc: "Từ vựng Movers minh họa bằng tranh theo chủ đề.",
    level: "Movers",
    type: "PDF",
    url: "https://www.cambridgeenglish.org/images/396159-yle-movers-word-list-picture-book-2018.pdf",
  },
  {
    name: "Flyers Wordlist Picture Book",
    desc: "Từ vựng Flyers minh họa bằng tranh theo chủ đề.",
    level: "Flyers",
    type: "PDF",
    url: "https://www.cambridgeenglish.org/images/396160-yle-flyers-word-list-picture-book-2018.pdf",
  },
  {
    name: "Đề thi mẫu YLE — Sample Papers Volume 1",
    desc: "Đề mẫu chính thức đủ 3 cấp (Listening, Reading & Writing, Speaking) kèm tapescript và đáp án. Link audio nghe nằm trong file PDF.",
    level: "Tất cả cấp",
    type: "PDF + Audio",
    url: "https://www.cambridgeenglish.org/Images/young-learners-sample-papers-2018-vol1.pdf",
  },
  {
    name: "Đề thi mẫu YLE — Sample Papers Volume 2",
    desc: "Bộ đề mẫu thứ hai đủ 3 cấp để bé thi thử. Link audio nghe nằm trong file PDF.",
    level: "Tất cả cấp",
    type: "PDF + Audio",
    url: "https://www.cambridgeenglish.org/Images/423014-cambridge-english-young-learners-sample-papers-2018-volume-2.pdf",
  },
  {
    name: "Handbook for Teachers (bản 2024)",
    desc: "Cẩm nang chính thức: cấu trúc đề, tiêu chí chấm điểm, danh sách ngữ pháp từng cấp, mẹo luyện từng phần thi.",
    level: "Tất cả cấp",
    type: "PDF",
    url: "https://www.cambridgeenglish.org/Images/357180-starters-movers-and-flyers-handbook-for-teachers-2024.pdf",
  },
  {
    name: "Trang luyện thi Starters (audio + đề mới nhất)",
    desc: "Trang chuẩn bị thi chính thức: audio mẫu, video Speaking test thật, hoạt động luyện tập.",
    level: "Starters",
    type: "Trang web",
    url: "https://www.cambridgeenglish.org/exams-and-tests/starters/preparation/",
  },
  {
    name: "Trang luyện thi Movers (audio + đề mới nhất)",
    desc: "Audio mẫu, video Speaking test, hoạt động luyện tập cho cấp Movers.",
    level: "Movers",
    type: "Trang web",
    url: "https://www.cambridgeenglish.org/exams-and-tests/movers/preparation/",
  },
  {
    name: "Trang luyện thi Flyers (audio + đề mới nhất)",
    desc: "Audio mẫu, video Speaking test, hoạt động luyện tập cho cấp Flyers.",
    level: "Flyers",
    type: "Trang web",
    url: "https://www.cambridgeenglish.org/exams-and-tests/flyers/preparation/",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// GIÁO TRÌNH CHÍNH THỐNG THEO CHUẨN QUỐC TẾ — chọn 1 bộ chính học xuyên suốt
// ─────────────────────────────────────────────────────────────────────────────

export type Coursebook = {
  name: string;
  publisher: string;
  levels: string;
  fit: string;
  note: string;
  url: string;
  tag?: string;
};

export const coursebooks: Coursebook[] = [
  {
    name: "Family and Friends (2nd ed.)",
    publisher: "Oxford University Press",
    levels: "Starter → 5 · phủ Starters → Flyers",
    fit: "Cân bằng 4 kỹ năng, phonics rất tốt, có bản quốc tế và bản Việt Nam",
    note: "Bài học trong app được xây bám theo các chủ đề của bộ này",
    url: "https://elt.oup.com/student/familyandfriends/",
    tag: "⭐ Khuyên dùng làm giáo trình chính",
  },
  {
    name: "Kid's Box New Generation",
    publisher: "Cambridge University Press",
    levels: "1 → 6 · phủ Starters → Flyers",
    fit: "Bám sát khung YLE nhất vì cùng nhà xuất bản ra đề thi",
    note: "Nhiều hoạt động sáng tạo, phù hợp lớp học",
    url: "https://www.cambridge.org/gb/cambridgeenglish/catalog/primary/kids-box-new-generation",
  },
  {
    name: "Everybody Up (2nd ed.)",
    publisher: "Oxford University Press",
    levels: "Starter → 6",
    fit: "Mạnh về giao tiếp, nhẹ nhàng dễ tiếp cận",
    note: "Nhiều bài hát, phù hợp bé thích hát",
    url: "https://elt.oup.com/student/everybodyup/",
  },
  {
    name: "Oxford Phonics World (1–5)",
    publisher: "Oxford University Press",
    levels: "Giai đoạn 0 — Nền móng",
    fit: "44 âm, blends, digraphs — nền tảng đọc và phát âm",
    note: "Học song song 2–3 tháng đầu, bắt buộc nếu bé chưa biết phonics",
    url: "https://elt.oup.com/student/oxfordphonicsworld/",
  },
  {
    name: "Grammar Friends (1–6)",
    publisher: "Oxford University Press",
    levels: "Bổ trợ từ Movers trở đi",
    fit: "Ngữ pháp theo chủ điểm, bài tập ngắn dễ làm",
    note: "Dùng song song giáo trình chính, mỗi tuần 1 unit",
    url: "https://elt.oup.com/student/grammarfriends/",
  },
];

export type ExamBook = {
  name: string;
  when: string;
  url: string;
};

export const examBooks: ExamBook[] = [
  {
    name: "Fun for Starters / Movers / Flyers (4th ed.) — Cambridge",
    when: "Sách luyện thi chính, dùng 4–6 tháng cuối mỗi cấp",
    url: "https://www.cambridge.org/gb/cambridgeenglish/catalog/cambridge-english-exams-ielts/fun-starters-movers-and-flyers-fourth-edition",
  },
  {
    name: "Storyfun for Starters / Movers / Flyers — Cambridge",
    when: "Bổ trợ Đọc–Viết qua truyện, học song song với Fun for",
    url: "https://www.cambridge.org/gb/cambridgeenglish/catalog/cambridge-english-exams-ielts/storyfun-starters-movers-and-flyers-2nd-edition",
  },
  {
    name: "Authentic Practice Tests 1–4 — Cambridge",
    when: "Đề thi thật các năm trước, dành cho 8 tuần cuối trước kỳ thi",
    url: "https://www.cambridge.org/gb/cambridgeenglish/catalog/cambridge-english-exams-ielts/cambridge-english-young-learners-practice-tests",
  },
  {
    name: "Get Ready for Starters / Movers / Flyers — Oxford",
    when: "Thay thế/bổ sung cho Fun for, nhiều bài tập theo kỹ năng",
    url: "https://elt.oup.com/catalogue/items/global/young_learners/get_ready_for_starters_movers_and_flyers/",
  },
];

export type GradedReader = {
  name: string;
  level: string;
  note: string;
  url: string;
};

export const gradedReaders: GradedReader[] = [
  {
    name: "Oxford Reading Tree (Biff, Chip and Kipper)",
    level: "Starters → Flyers · cấp 1–9+",
    note: "Phân cấp rõ ràng nhất, đọc 2–3 quyển/tuần",
    url: "https://www.oxfordowl.co.uk/",
  },
  {
    name: "Usborne Very First Reading / First Reading",
    level: "Starters",
    note: "Truyện ngắn, chữ to, có audio",
    url: "https://usborne.com/gb/books/series/very-first-reading",
  },
  {
    name: "Elephant & Piggie · Dr. Seuss",
    level: "Starters → Movers",
    note: "Câu ngắn lặp lại, bé dễ thuộc và nhại lại",
    url: "https://www.seussville.com/",
  },
  {
    name: "Oxford Read and Imagine / Read and Discover",
    level: "Movers → Flyers",
    note: "Truyện + kiến thức khoa học, có audio tải về",
    url: "https://elt.oup.com/catalogue/items/global/graded_readers/oxford_read_and_imagine/",
  },
  {
    name: "Magic Tree House · Horrid Henry",
    level: "Flyers trở lên",
    note: "Chapter book đầu tiên cho bé đọc dài",
    url: "https://www.magictreehouse.com/",
  },
];

// Nền tảng luyện 4 kỹ năng (app/web) — bổ sung cho bảng resourceLinks
export type PracticePlatform = {
  name: string;
  skill: string;
  fee: string;
  url: string;
};

export const practicePlatforms: PracticePlatform[] = [
  {
    name: "British Council LearnEnglish Kids",
    skill: "Game, bài hát, truyện, worksheet — bám A1–A2",
    fee: "Miễn phí",
    url: "https://learnenglishkids.britishcouncil.org/",
  },
  {
    name: "Oxford Owl for Home",
    skill: "Thư viện ebook Oxford Reading Tree có audio",
    fee: "Miễn phí",
    url: "https://www.oxfordowl.co.uk/",
  },
  {
    name: "Starfall",
    skill: "Phonics và đọc cho bé mới bắt đầu",
    fee: "Miễn phí phần lớn",
    url: "https://www.starfall.com/",
  },
  {
    name: "Khan Academy Kids",
    skill: "Đọc, phonics, logic — không quảng cáo",
    fee: "Miễn phí",
    url: "https://khankids.org/",
  },
  {
    name: "ELSA Speak",
    skill: "Chấm phát âm bằng AI theo từng âm tiết",
    fee: "Freemium",
    url: "https://elsaspeak.com/",
  },
  {
    name: "Quizlet",
    skill: "Học từ vựng lặp lại ngắt quãng, có bộ YLE sẵn",
    fee: "Miễn phí",
    url: "https://quizlet.com/",
  },
  {
    name: "Raz-Kids (Reading A-Z)",
    skill: "Đọc phân cấp có kiểm tra hiểu bài, theo dõi tiến độ",
    fee: "Trả phí",
    url: "https://www.raz-kids.com/",
  },
  {
    name: "Epic!",
    skill: "Thư viện 40.000+ sách thiếu nhi có đọc thành tiếng",
    fee: "Trả phí",
    url: "https://www.getepic.com/",
  },
];
