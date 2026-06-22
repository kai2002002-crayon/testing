// data_aside.js
// 🔮 願像系統 (Aside) 資料庫

const ASIDE_DATA = {
    "Amelia": { totalName: "[請填入願像總名稱]", stars: {
        1: { icon: "https://i.postimg.cc/rKWS8MLS/Aside-Skill-Amelia-1.png", name: "[1星名稱]", desc: "[1星描述]", effects: ["效果1", "效果2"] },
        2: { icon: "https://i.postimg.cc/4mtzJsTp/Aside-Skill-Amelia-2.png", name: "[2星名稱]", desc: "[2星描述]", effects: ["效果1"] },
        3: { icon: "https://i.postimg.cc/6yRd9tNr/Aside-Skill-Amelia-3.png", name: "[3星名稱]", desc: "[3星描述]", effects: ["效果1"], globalEffects: ["攻擊力 +X%", "體力 +Y%"] }
    }},
    "Canna": { totalName: "[請填入願像總名稱]", stars: {
        1: { icon: "https://i.postimg.cc/2Vv4zrf7/Aside-Skill-Canna-1.png", name: "[1星名稱]", desc: "[1星描述]", effects: ["效果1"] },
        2: { icon: "https://i.postimg.cc/JGJb1MWK/Aside-Skill-Canna-2.png", name: "[2星名稱]", desc: "[2星描述]", effects: ["效果1"] },
        3: { icon: "https://i.postimg.cc/nC7vHptk/Aside-Skill-Canna-3.png", name: "[3星名稱]", desc: "[3星描述]", effects: ["效果1"], globalEffects: ["能力加成1"] }
    }},
    "Chloe": { totalName: "[請填入願像總名稱]", stars: {
        1: { icon: "https://i.postimg.cc/w7Jh6gd0/Aside-Skill-Chloe-1.png", name: "[1星名稱]", desc: "[1星描述]", effects: ["效果1"] },
        2: { icon: "https://i.postimg.cc/YvHQ0Zpf/Aside-Skill-Chloe-2.png", name: "[2星名稱]", desc: "[2星描述]", effects: ["效果1"] },
        3: { icon: "https://i.postimg.cc/4YgpyqJp/Aside-Skill-Chloe-3.png", name: "[3星名稱]", desc: "[3星描述]", effects: ["效果1"], globalEffects: ["能力加成1"] }
    }},
    "Diana": { totalName: "[請填入願像總名稱]", stars: {
        1: { icon: "https://i.postimg.cc/SnhcR3yf/Aside-Skill-Diana-1.png", name: "[1星名稱]", desc: "[1星描述]", effects: ["效果1"] },
        2: { icon: "https://i.postimg.cc/PCj1J9tW/Aside-Skill-Diana-2.png", name: "[2星名稱]", desc: "[2星描述]", effects: ["效果1"] },
        3: { icon: "https://i.postimg.cc/18QDX29H/Aside-Skill-Diana-3.png", name: "[3星名稱]", desc: "[3星描述]", effects: ["效果1"], globalEffects: ["能力加成1"] }
    }},
    "Ed": { totalName: "[請填入願像總名稱]", stars: {
        1: { icon: "https://i.postimg.cc/jDby2msc/Aside-Skill-Ed-1.png", name: "[1星名稱]", desc: "[1星描述]", effects: ["效果1"] },
        2: { icon: "https://i.postimg.cc/75kShdxX/Aside-Skill-Ed-2.png", name: "[2星名稱]", desc: "[2星描述]", effects: ["效果1"] },
        3: { icon: "https://i.postimg.cc/dhYG3pq5/Aside-Skill-Ed-3.png", name: "[3星名稱]", desc: "[3星描述]", effects: ["效果1"], globalEffects: ["能力加成1"] }
    }},
    "Haley": { totalName: "[請填入願像總名稱]", stars: {
        1: { icon: "https://i.postimg.cc/Xrb9qmV2/Aside-Skill-Haley-1.png", name: "[1星名稱]", desc: "[1星描述]", effects: ["效果1"] },
        2: { icon: "https://i.postimg.cc/9Dhy0KW8/Aside-Skill-Haley-2.png", name: "[2星名稱]", desc: "[2星描述]", effects: ["效果1"] },
        3: { icon: "https://i.postimg.cc/tsjFJwXM/Aside-Skill-Haley-3.png", name: "[3星名稱]", desc: "[3星描述]", effects: ["效果1"], globalEffects: ["能力加成1"] }
    }},
    "Hilde": { totalName: "[請填入願像總名稱]", stars: {
        1: { icon: "https://i.postimg.cc/TK6n1FRS/Aside-Skill-Hilde-1.png", name: "[1星名稱]", desc: "[1星描述]", effects: ["效果1"] },
        2: { icon: "https://i.postimg.cc/yDH0xtVG/Aside-Skill-Hilde-2.png", name: "[2星名稱]", desc: "[2星描述]", effects: ["效果1"] },
        3: { icon: "https://i.postimg.cc/5XV8yTxZ/Aside-Skill-Hilde-3.png", name: "[3星名稱]", desc: "[3星描述]", effects: ["效果1"], globalEffects: ["能力加成1"] }
    }},
    "Hyarot": { totalName: "[請填入願像總名稱]", stars: {
        1: { icon: "https://i.postimg.cc/Xrb9qmj0/Aside-Skill-Kyarot-1.png", name: "[1星名稱]", desc: "[1星描述]", effects: ["效果1"] },
        2: { icon: "https://i.postimg.cc/LJpj5w9p/Aside-Skill-Kyarot-2.png", name: "[2星名稱]", desc: "[2星描述]", effects: ["效果1"] },
        3: { icon: "https://i.postimg.cc/nXJqrgFx/Aside-Skill-Kyarot-3.png", name: "[3星名稱]", desc: "[3星描述]", effects: ["效果1"], globalEffects: ["能力加成1"] }
    }},
    "Momo": { totalName: "[請填入願像總名稱]", stars: {
        1: { icon: "https://i.postimg.cc/PCj1J9XT/Aside-Skill-Momo-1.png", name: "[1星名稱]", desc: "[1星描述]", effects: ["效果1"] },
        2: { icon: "https://i.postimg.cc/xX3Mz5Ch/Aside-Skill-Momo-2.png", name: "[2星名稱]", desc: "[2星描述]", effects: ["效果1"] },
        3: { icon: "https://i.postimg.cc/yDH0xt17/Aside-Skill-Momo-3.png", name: "[3星名稱]", desc: "[3星描述]", effects: ["效果1"], globalEffects: ["能力加成1"] }
    }},
    "Ner": { totalName: "[請填入願像總名稱]", stars: {
        1: { icon: "https://i.postimg.cc/mPyCHjDK/Aside-Skill-Ner-1.png", name: "[1星名稱]", desc: "[1星描述]", effects: ["效果1"] },
        2: { icon: "https://i.postimg.cc/XrkdCLJT/Aside-Skill-Ner-2.png", name: "[2星名稱]", desc: "[2星描述]", effects: ["效果1"] },
        3: { icon: "https://i.postimg.cc/MnmVQ5TC/Aside-Skill-Ner-3.png", name: "[3星名稱]", desc: "[3星描述]", effects: ["效果1"], globalEffects: ["能力加成1"] }
    }},
    "Picola": { totalName: "[請填入願像總名稱]", stars: {
        1: { icon: "https://i.postimg.cc/LJ3L1D5d/Aside-Skill-Picora-1.png", name: "[1星名稱]", desc: "[1星描述]", effects: ["效果1"] },
        2: { icon: "https://i.postimg.cc/xX3Mz58S/Aside-Skill-Picora-2.png", name: "[2星名稱]", desc: "[2星描述]", effects: ["效果1"] },
        3: { icon: "https://i.postimg.cc/217hZGyD/Aside-Skill-Picora-3.png", name: "[3星名稱]", desc: "[3星描述]", effects: ["效果1"], globalEffects: ["能力加成1"] }
    }},
    "Posher": { totalName: "[請填入願像總名稱]", stars: {
        1: { icon: "https://i.postimg.cc/fVfm9Cys/Aside-Skill-Posher-1.png", name: "[1星名稱]", desc: "[1星描述]", effects: ["效果1"] },
        2: { icon: "https://i.postimg.cc/k2vKbsGq/Aside-Skill-Posher-2.png", name: "[2星名稱]", desc: "[2星描述]", effects: ["效果1"] },
        3: { icon: "https://i.postimg.cc/xX3Mz58f/Aside-Skill-Posher-3.png", name: "[3星名稱]", desc: "[3星描述]", effects: ["效果1"], globalEffects: ["能力加成1"] }
    }},
    "RenewaAwaken": { totalName: "[請填入願像總名稱]", stars: {
        1: { icon: "https://i.postimg.cc/rDNxrjsm/Aside-Skill-Renewa-Awaken-1.png", name: "[1星名稱]", desc: "[1星描述]", effects: ["效果1"] },
        2: { icon: "https://i.postimg.cc/18rwqBXV/Aside-Skill-Renewa-Awaken-2.png", name: "[2星名稱]", desc: "[2星描述]", effects: ["效果1"] },
        3: { icon: "https://i.postimg.cc/hX1Tdsvm/Aside-Skill-Renewa-Awaken-3.png", name: "[3星名稱]", desc: "[3星描述]", effects: ["效果1"], globalEffects: ["能力加成1"] }
    }},
    "Rim": { totalName: "[請填入願像總名稱]", stars: {
        1: { icon: "https://i.postimg.cc/5H9vqzQ0/Aside-Skill-Rim-1.png", name: "[1星名稱]", desc: "[1星描述]", effects: ["效果1"] },
        2: { icon: "https://i.postimg.cc/VSsMBt0d/Aside-Skill-Rim-2.png", name: "[2星名稱]", desc: "[2星描述]", effects: ["效果1"] },
        3: { icon: "https://i.postimg.cc/1gR6cFV8/Aside-Skill-Rim-3.png", name: "[3星名稱]", desc: "[3星描述]", effects: ["效果1"], globalEffects: ["能力加成1"] }
    }},
    "Risty": { totalName: "[請填入願像總名稱]", stars: {
        1: { icon: "https://i.postimg.cc/qtBnXK6h/Aside-Skill-Risty-1.png", name: "[1星名稱]", desc: "[1星描述]", effects: ["效果1"] },
        2: { icon: "https://i.postimg.cc/GB3YJDTs/Aside-Skill-Risty-2.png", name: "[2星名稱]", desc: "[2星描述]", effects: ["效果1"] },
        3: { icon: "https://i.postimg.cc/2qjvFWLn/Aside-Skill-Risty-3.png", name: "[3星名稱]", desc: "[3星描述]", effects: ["效果1"], globalEffects: ["能力加成1"] }
    }},
    "Rufo": { totalName: "[請填入願像總名稱]", stars: {
        1: { icon: "https://i.postimg.cc/t1RPt6n5/Aside-Skill-Rufo-1.png", name: "[1星名稱]", desc: "[1星描述]", effects: ["效果1"] },
        2: { icon: "https://i.postimg.cc/mcZMN91S/Aside-Skill-Rufo-2.png", name: "[2星名稱]", desc: "[2星描述]", effects: ["效果1"] },
        3: { icon: "https://i.postimg.cc/676RLZ4Y/Aside-Skill-Rufo-3.png", name: "[3星名稱]", desc: "[3星描述]", effects: ["效果1"], globalEffects: ["能力加成1"] }
    }},
    "Selline": { totalName: "[請填入願像總名稱]", stars: {
        1: { icon: "https://i.postimg.cc/hJ4xbmQw/Aside-Skill-Selline-1.png", name: "[1星名稱]", desc: "[1星描述]", effects: ["效果1"] },
        2: { icon: "https://i.postimg.cc/94x9xfyx/Aside-Skill-Selline-2.png", name: "[2星名稱]", desc: "[2星描述]", effects: ["效果1"] },
        3: { icon: "https://i.postimg.cc/1gWFWzDB/Aside-Skill-Selline-3.png", name: "[3星名稱]", desc: "[3星描述]", effects: ["效果1"], globalEffects: ["能力加成1"] }
    }},
    "Sist": { totalName: "[請填入願像總名稱]", stars: {
        1: { icon: "https://i.postimg.cc/kVjSj5Ww/Aside-Skill-Sist-1.png", name: "[1星名稱]", desc: "[1星描述]", effects: ["效果1"] },
        2: { icon: "https://i.postimg.cc/3yLGLw2b/Aside-Skill-Sist-2.png", name: "[2星名稱]", desc: "[2星描述]", effects: ["效果1"] },
        3: { icon: "https://i.postimg.cc/LhGtKhGg/Aside-Skill-Sist-3.png", name: "[3星名稱]", desc: "[3星描述]", effects: ["效果1"], globalEffects: ["能力加成1"] }
    }},
    "Snorky": { totalName: "[請填入願像總名稱]", stars: {
        1: { icon: "https://i.postimg.cc/bsbQzpjz/Aside-Skill-Snorky-1.png", name: "[1星名稱]", desc: "[1星描述]", effects: ["效果1"] },
        2: { icon: "https://i.postimg.cc/c6PRy6Pg/Aside-Skill-Snorky-2.png", name: "[2星名稱]", desc: "[2星描述]", effects: ["效果1"] },
        3: { icon: "https://i.postimg.cc/nC7vHptc/Aside-Skill-Snorky-3.png", name: "[3星名稱]", desc: "[3星描述]", effects: ["效果1"], globalEffects: ["能力加成1"] }
    }},
    "Ui": { totalName: "[請填入願像總名稱]", stars: {
        1: { icon: "https://i.postimg.cc/tYPhXpHY/Aside-Skill-Ui-1.png", name: "[1星名稱]", desc: "[1星描述]", effects: ["效果1"] },
        2: { icon: "https://i.postimg.cc/WhrM2TP3/Aside-Skill-Ui-2.png", name: "[2星名稱]", desc: "[2星描述]", effects: ["效果1"] },
        3: { icon: "https://i.postimg.cc/rKWS8MLs/Aside-Skill-Ui-3.png", name: "[3星名稱]", desc: "[3星描述]", effects: ["效果1"], globalEffects: ["能力加成1"] }
    }},
    "Vivi": { totalName: "[請填入願像總名稱]", stars: {
        1: { icon: "https://i.postimg.cc/MvRyWq8M/Aside-Skill-Vivi-1.png", name: "[1星名稱]", desc: "[1星描述]", effects: ["效果1"] },
        2: { icon: "https://i.postimg.cc/9rTGWCjq/Aside-skill-vivi-2.png", name: "[2星名稱]", desc: "[2星描述]", effects: ["效果1"] },
        3: { icon: "https://i.postimg.cc/F7cj9NQk/Aside-skill-vivi-3.png", name: "[3星名稱]", desc: "[3星描述]", effects: ["效果1"], globalEffects: ["能力加成1"] }
    }},
    "xXionx": { totalName: "[請填入願像總名稱]", stars: {
        1: { icon: "https://i.postimg.cc/1f6p9sZq/Aside-Skill-x-Xionx-1.png", name: "[1星名稱]", desc: "[1星描述]", effects: ["效果1"] },
        2: { icon: "https://i.postimg.cc/qzn8k4dK/Aside-Skill-x-Xionx-2.png", name: "[2星名稱]", desc: "[2星描述]", effects: ["效果1"] },
        3: { icon: "https://i.postimg.cc/CzDjFSVC/Aside-Skill-x-Xionx-3.png", name: "[3星名稱]", desc: "[3星描述]", effects: ["效果1"], globalEffects: ["能力加成1"] }
    }}
};