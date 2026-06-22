// data_aside.js
// 🔮 願像系統 (Aside) 資料庫 - 多語系版本 (zh: 中文, ja: 日文, en: 英文)

const ASIDE_DATA = {
    "Amelia": { 
        asideIcon: "https://i.postimg.cc/bsZs8jKN/Aside-Icon-Amelia.png", 
        totalName: { zh: "[中文願像總名稱]", ja: "[日文願像總名稱]", en: "[English Total Name]" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/rKWS8MLS/Aside-Skill-Amelia-1.png", 
                name: { zh: "[中文1星名稱]", ja: "[日文1星名稱]", en: "[English 1-Star Name]" }, 
                desc: { zh: "[中文1星描述]", ja: "[日文1星描述]", en: "[English 1-Star Desc]" }, 
                effects: { zh: ["效果1", "效果2"], ja: ["効果1", "効果2"], en: ["Effect 1", "Effect 2"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/4mtzJsTp/Aside-Skill-Amelia-2.png", 
                name: { zh: "[中文2星名稱]", ja: "[日文2星名稱]", en: "[English 2-Star Name]" }, 
                desc: { zh: "[中文2星描述]", ja: "[日文2星描述]", en: "[English 2-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/6yRd9tNr/Aside-Skill-Amelia-3.png", 
                name: { zh: "[中文3星名稱]", ja: "[日文3星名稱]", en: "[English 3-Star Name]" }, 
                desc: { zh: "[中文3星描述]", ja: "[日文3星描述]", en: "[English 3-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] }, 
                globalEffects: { zh: ["攻擊力 +X%", "體力 +Y%"], ja: ["攻撃力 +X%", "体力 +Y%"], en: ["ATK +X%", "HP +Y%"] } 
            }
        }
    },
    "Canna": { 
        asideIcon: "https://i.postimg.cc/2V1VmfPj/Aside-Icon-Canna.png", 
        totalName: { zh: "[中文願像總名稱]", ja: "[日文願像總名稱]", en: "[English Total Name]" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/2Vv4zrf7/Aside-Skill-Canna-1.png", 
                name: { zh: "[中文1星名稱]", ja: "[日文1星名稱]", en: "[English 1-Star Name]" }, 
                desc: { zh: "[中文1星描述]", ja: "[日文1星描述]", en: "[English 1-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/JGJb1MWK/Aside-Skill-Canna-2.png", 
                name: { zh: "[中文2星名稱]", ja: "[日文2星名稱]", en: "[English 2-Star Name]" }, 
                desc: { zh: "[中文2星描述]", ja: "[日文2星描述]", en: "[English 2-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/nC7vHptk/Aside-Skill-Canna-3.png", 
                name: { zh: "[中文3星名稱]", ja: "[日文3星名稱]", en: "[English 3-Star Name]" }, 
                desc: { zh: "[中文3星描述]", ja: "[日文3星描述]", en: "[English 3-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] }, 
                globalEffects: { zh: ["能力加成1"], ja: ["ステータスボーナス1"], en: ["Global Stat Bonus 1"] } 
            }
        }
    },
    "Chloe": { 
        asideIcon: "https://i.postimg.cc/tYsYyHLT/Aside-Icon-Chloe.png", 
        totalName: { zh: "[中文願像總名稱]", ja: "[日文願像總名稱]", en: "[English Total Name]" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/w7Jh6gd0/Aside-Skill-Chloe-1.png", 
                name: { zh: "[中文1星名稱]", ja: "[日文1星名稱]", en: "[English 1-Star Name]" }, 
                desc: { zh: "[中文1星描述]", ja: "[日文1星描述]", en: "[English 1-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/YvHQ0Zpf/Aside-Skill-Chloe-2.png", 
                name: { zh: "[中文2星名稱]", ja: "[日文2星名稱]", en: "[English 2-Star Name]" }, 
                desc: { zh: "[中文2星描述]", ja: "[日文2星描述]", en: "[English 2-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/4YgpyqJp/Aside-Skill-Chloe-3.png", 
                name: { zh: "[中文3星名稱]", ja: "[日文3星名稱]", en: "[English 3-Star Name]" }, 
                desc: { zh: "[中文3星描述]", ja: "[日文3星描述]", en: "[English 3-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] }, 
                globalEffects: { zh: ["能力加成1"], ja: ["ステータスボーナス1"], en: ["Global Stat Bonus 1"] } 
            }
        }
    },
    "Diana": { 
        asideIcon: "https://i.postimg.cc/9rDrVjv0/Aside-Icon-Diana.png", 
        totalName: { zh: "[中文願像總名稱]", ja: "[日文願像總名稱]", en: "[English Total Name]" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/SnhcR3yf/Aside-Skill-Diana-1.png", 
                name: { zh: "[中文1星名稱]", ja: "[日文1星名稱]", en: "[English 1-Star Name]" }, 
                desc: { zh: "[中文1星描述]", ja: "[日文1星描述]", en: "[English 1-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/PCj1J9tW/Aside-Skill-Diana-2.png", 
                name: { zh: "[中文2星名稱]", ja: "[日文2星名稱]", en: "[English 2-Star Name]" }, 
                desc: { zh: "[中文2星描述]", ja: "[日文2星描述]", en: "[English 2-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/18QDX29H/Aside-Skill-Diana-3.png", 
                name: { zh: "[中文3星名稱]", ja: "[日文3星名稱]", en: "[English 3-Star Name]" }, 
                desc: { zh: "[中文3星描述]", ja: "[日文3星描述]", en: "[English 3-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] }, 
                globalEffects: { zh: ["能力加成1"], ja: ["ステータスボーナス1"], en: ["Global Stat Bonus 1"] } 
            }
        }
    },
    "Ed": { 
        asideIcon: "https://i.postimg.cc/9rDrVjvD/Aside-Icon-Ed.png", 
        totalName: { zh: "[中文願像總名稱]", ja: "[日文願像總名稱]", en: "[English Total Name]" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/jDby2msc/Aside-Skill-Ed-1.png", 
                name: { zh: "[中文1星名稱]", ja: "[日文1星名稱]", en: "[English 1-Star Name]" }, 
                desc: { zh: "[中文1星描述]", ja: "[日文1星描述]", en: "[English 1-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/75kShdxX/Aside-Skill-Ed-2.png", 
                name: { zh: "[中文2星名稱]", ja: "[日文2星名稱]", en: "[English 2-Star Name]" }, 
                desc: { zh: "[中文2星描述]", ja: "[日文2星描述]", en: "[English 2-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/dhYG3pq5/Aside-Skill-Ed-3.png", 
                name: { zh: "[中文3星名稱]", ja: "[日文3星名稱]", en: "[English 3-Star Name]" }, 
                desc: { zh: "[中文3星描述]", ja: "[日文3星描述]", en: "[English 3-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] }, 
                globalEffects: { zh: ["能力加成1"], ja: ["ステータスボーナス1"], en: ["Global Stat Bonus 1"] } 
            }
        }
    },
    "Haley": { 
        asideIcon: "https://i.postimg.cc/BXRtnV0J/Aside-Icon-Haley.png", 
        totalName: { zh: "[中文願像總名稱]", ja: "[日文願像總名稱]", en: "[English Total Name]" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/Xrb9qmV2/Aside-Skill-Haley-1.png", 
                name: { zh: "[中文1星名稱]", ja: "[日文1星名稱]", en: "[English 1-Star Name]" }, 
                desc: { zh: "[中文1星描述]", ja: "[日文1星描述]", en: "[English 1-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/9Dhy0KW8/Aside-Skill-Haley-2.png", 
                name: { zh: "[中文2星名稱]", ja: "[日文2星名稱]", en: "[English 2-Star Name]" }, 
                desc: { zh: "[中文2星描述]", ja: "[日文2星描述]", en: "[English 2-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/tsjFJwXM/Aside-Skill-Haley-3.png", 
                name: { zh: "[中文3星名稱]", ja: "[日文3星名稱]", en: "[English 3-Star Name]" }, 
                desc: { zh: "[中文3星描述]", ja: "[日文3星描述]", en: "[English 3-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] }, 
                globalEffects: { zh: ["能力加成1"], ja: ["ステータスボーナス1"], en: ["Global Stat Bonus 1"] } 
            }
        }
    },
    "Hilde": { 
        asideIcon: "https://i.postimg.cc/crP6LbSs/Aside-Icon-Hilde.png", 
        totalName: { zh: "[中文願像總名稱]", ja: "[日文願像總名稱]", en: "[English Total Name]" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/TK6n1FRS/Aside-Skill-Hilde-1.png", 
                name: { zh: "[中文1星名稱]", ja: "[日文1星名稱]", en: "[English 1-Star Name]" }, 
                desc: { zh: "[中文1星描述]", ja: "[日文1星描述]", en: "[English 1-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/yDH0xtVG/Aside-Skill-Hilde-2.png", 
                name: { zh: "[中文2星名稱]", ja: "[日文2星名稱]", en: "[English 2-Star Name]" }, 
                desc: { zh: "[中文2星描述]", ja: "[日文2星描述]", en: "[English 2-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/5XV8yTxZ/Aside-Skill-Hilde-3.png", 
                name: { zh: "[中文3星名稱]", ja: "[日文3星名稱]", en: "[English 3-Star Name]" }, 
                desc: { zh: "[中文3星描述]", ja: "[日文3星描述]", en: "[English 3-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] }, 
                globalEffects: { zh: ["能力加成1"], ja: ["ステータスボーナス1"], en: ["Global Stat Bonus 1"] } 
            }
        }
    },
    "Hyarot": { 
        asideIcon: "https://i.postimg.cc/pp3yL6HW/Aside-Icon-Kyarot.png", 
        totalName: { zh: "[中文願像總名稱]", ja: "[日文願像總名稱]", en: "[English Total Name]" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/Xrb9qmj0/Aside-Skill-Kyarot-1.png", 
                name: { zh: "[中文1星名稱]", ja: "[日文1星名稱]", en: "[English 1-Star Name]" }, 
                desc: { zh: "[中文1星描述]", ja: "[日文1星描述]", en: "[English 1-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/LJpj5w9p/Aside-Skill-Kyarot-2.png", 
                name: { zh: "[中文2星名稱]", ja: "[日文2星名稱]", en: "[English 2-Star Name]" }, 
                desc: { zh: "[中文2星描述]", ja: "[日文2星描述]", en: "[English 2-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/nXJqrgFx/Aside-Skill-Kyarot-3.png", 
                name: { zh: "[中文3星名稱]", ja: "[日文3星名稱]", en: "[English 3-Star Name]" }, 
                desc: { zh: "[中文3星描述]", ja: "[日文3星描述]", en: "[English 3-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] }, 
                globalEffects: { zh: ["能力加成1"], ja: ["ステータスボーナス1"], en: ["Global Stat Bonus 1"] } 
            }
        }
    },
    "Momo": { 
        asideIcon: "https://i.postimg.cc/TpBh3463/Aside-Icon-Momo.png", 
        totalName: { zh: "[中文願像總名稱]", ja: "[日文願像總名稱]", en: "[English Total Name]" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/PCj1J9XT/Aside-Skill-Momo-1.png", 
                name: { zh: "[中文1星名稱]", ja: "[日文1星名稱]", en: "[English 1-Star Name]" }, 
                desc: { zh: "[中文1星描述]", ja: "[日文1星描述]", en: "[English 1-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/xX3Mz5Ch/Aside-Skill-Momo-2.png", 
                name: { zh: "[中文2星名稱]", ja: "[日文2星名稱]", en: "[English 2-Star Name]" }, 
                desc: { zh: "[中文2星描述]", ja: "[日文2星描述]", en: "[English 2-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/yDH0xt17/Aside-Skill-Momo-3.png", 
                name: { zh: "[中文3星名稱]", ja: "[日文3星名稱]", en: "[English 3-Star Name]" }, 
                desc: { zh: "[中文3星描述]", ja: "[日文3星描述]", en: "[English 3-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] }, 
                globalEffects: { zh: ["能力加成1"], ja: ["ステータスボーナス1"], en: ["Global Stat Bonus 1"] } 
            }
        }
    },
    "Ner": { 
        asideIcon: "https://i.postimg.cc/fJ1kRrNy/Aside-Icon-Ner.png", 
        totalName: { zh: "[中文願像總名稱]", ja: "[日文願像總名稱]", en: "[English Total Name]" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/mPyCHjDK/Aside-Skill-Ner-1.png", 
                name: { zh: "[中文1星名稱]", ja: "[日文1星名稱]", en: "[English 1-Star Name]" }, 
                desc: { zh: "[中文1星描述]", ja: "[日文1星描述]", en: "[English 1-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/XrkdCLJT/Aside-Skill-Ner-2.png", 
                name: { zh: "[中文2星名稱]", ja: "[日文2星名稱]", en: "[English 2-Star Name]" }, 
                desc: { zh: "[中文2星描述]", ja: "[日文2星描述]", en: "[English 2-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/MnmVQ5TC/Aside-Skill-Ner-3.png", 
                name: { zh: "[中文3星名稱]", ja: "[日文3星名稱]", en: "[English 3-Star Name]" }, 
                desc: { zh: "[中文3星描述]", ja: "[日文3星描述]", en: "[English 3-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] }, 
                globalEffects: { zh: ["能力加成1"], ja: ["ステータスボーナス1"], en: ["Global Stat Bonus 1"] } 
            }
        }
    },
    "Picola": { 
        asideIcon: "https://i.postimg.cc/0bhryBsK/Aside-Icon-Picora.png", 
        totalName: { zh: "[中文願像總名稱]", ja: "[日文願像總名稱]", en: "[English Total Name]" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/LJ3L1D5d/Aside-Skill-Picora-1.png", 
                name: { zh: "[中文1星名稱]", ja: "[日文1星名稱]", en: "[English 1-Star Name]" }, 
                desc: { zh: "[中文1星描述]", ja: "[日文1星描述]", en: "[English 1-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/xX3Mz58S/Aside-Skill-Picora-2.png", 
                name: { zh: "[中文2星名稱]", ja: "[日文2星名稱]", en: "[English 2-Star Name]" }, 
                desc: { zh: "[中文2星描述]", ja: "[日文2星描述]", en: "[English 2-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/217hZGyD/Aside-Skill-Picora-3.png", 
                name: { zh: "[中文3星名稱]", ja: "[日文3星名稱]", en: "[English 3-Star Name]" }, 
                desc: { zh: "[中文3星描述]", ja: "[日文3星描述]", en: "[English 3-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] }, 
                globalEffects: { zh: ["能力加成1"], ja: ["ステータスボーナス1"], en: ["Global Stat Bonus 1"] } 
            }
        }
    },
    "Posher": { 
        asideIcon: "https://i.postimg.cc/QHvVdy3B/Aside-Icon-Posher.png", 
        totalName: { zh: "[中文願像總名稱]", ja: "[日文願像總名稱]", en: "[English Total Name]" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/fVfm9Cys/Aside-Skill-Posher-1.png", 
                name: { zh: "[中文1星名稱]", ja: "[日文1星名稱]", en: "[English 1-Star Name]" }, 
                desc: { zh: "[中文1星描述]", ja: "[日文1星描述]", en: "[English 1-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/k2vKbsGq/Aside-Skill-Posher-2.png", 
                name: { zh: "[中文2星名稱]", ja: "[日文2星名稱]", en: "[English 2-Star Name]" }, 
                desc: { zh: "[中文2星描述]", ja: "[日文2星描述]", en: "[English 2-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/xX3Mz58f/Aside-Skill-Posher-3.png", 
                name: { zh: "[中文3星名稱]", ja: "[日文3星名稱]", en: "[English 3-Star Name]" }, 
                desc: { zh: "[中文3星描述]", ja: "[日文3星描述]", en: "[English 3-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] }, 
                globalEffects: { zh: ["能力加成1"], ja: ["ステータスボーナス1"], en: ["Global Stat Bonus 1"] } 
            }
        }
    },
    "RenewaAwaken": { 
        asideIcon: "https://i.postimg.cc/3dzWxcTD/Aside-Icon-Renewa-Awaken.png", 
        totalName: { zh: "[中文願像總名稱]", ja: "[日文願像總名稱]", en: "[English Total Name]" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/rDNxrjsm/Aside-Skill-Renewa-Awaken-1.png", 
                name: { zh: "[中文1星名稱]", ja: "[日文1星名稱]", en: "[English 1-Star Name]" }, 
                desc: { zh: "[中文1星描述]", ja: "[日文1星描述]", en: "[English 1-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/18rwqBXV/Aside-Skill-Renewa-Awaken-2.png", 
                name: { zh: "[中文2星名稱]", ja: "[日文2星名稱]", en: "[English 2-Star Name]" }, 
                desc: { zh: "[中文2星描述]", ja: "[日文2星描述]", en: "[English 2-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/hX1Tdsvm/Aside-Skill-Renewa-Awaken-3.png", 
                name: { zh: "[中文3星名稱]", ja: "[日文3星名稱]", en: "[English 3-Star Name]" }, 
                desc: { zh: "[中文3星描述]", ja: "[日文3星描述]", en: "[English 3-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] }, 
                globalEffects: { zh: ["能力加成1"], ja: ["ステータスボーナス1"], en: ["Global Stat Bonus 1"] } 
            }
        }
    },
    "Rim": { 
        asideIcon: "https://i.postimg.cc/xcXcYSBw/Aside-Icon-Rim.png", 
        totalName: { zh: "[中文願像總名稱]", ja: "[日文願像總名稱]", en: "[English Total Name]" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/5H9vqzQ0/Aside-Skill-Rim-1.png", 
                name: { zh: "[中文1星名稱]", ja: "[日文1星名稱]", en: "[English 1-Star Name]" }, 
                desc: { zh: "[中文1星描述]", ja: "[日文1星描述]", en: "[English 1-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/VSsMBt0d/Aside-Skill-Rim-2.png", 
                name: { zh: "[中文2星名稱]", ja: "[日文2星名稱]", en: "[English 2-Star Name]" }, 
                desc: { zh: "[中文2星描述]", ja: "[日文2星描述]", en: "[English 2-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/1gR6cFV8/Aside-Skill-Rim-3.png", 
                name: { zh: "[中文3星名稱]", ja: "[日文3星名稱]", en: "[English 3-Star Name]" }, 
                desc: { zh: "[中文3星描述]", ja: "[日文3星描述]", en: "[English 3-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] }, 
                globalEffects: { zh: ["能力加成1"], ja: ["ステータスボーナス1"], en: ["Global Stat Bonus 1"] } 
            }
        }
    },
    "Risty": { 
        asideIcon: "https://i.postimg.cc/1f8fPZLh/Aside-Icon-Risty.png", 
        totalName: { zh: "[中文願像總名稱]", ja: "[日文願像總名稱]", en: "[English Total Name]" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/qtBnXK6h/Aside-Skill-Risty-1.png", 
                name: { zh: "[中文1星名稱]", ja: "[日文1星名稱]", en: "[English 1-Star Name]" }, 
                desc: { zh: "[中文1星描述]", ja: "[日文1星描述]", en: "[English 1-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/GB3YJDTs/Aside-Skill-Risty-2.png", 
                name: { zh: "[中文2星名稱]", ja: "[日文2星名稱]", en: "[English 2-Star Name]" }, 
                desc: { zh: "[中文2星描述]", ja: "[日文2星描述]", en: "[English 2-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/2qjvFWLn/Aside-Skill-Risty-3.png", 
                name: { zh: "[中文3星名稱]", ja: "[日文3星名稱]", en: "[English 3-Star Name]" }, 
                desc: { zh: "[中文3星描述]", ja: "[日文3星描述]", en: "[English 3-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] }, 
                globalEffects: { zh: ["能力加成1"], ja: ["ステータスボーナス1"], en: ["Global Stat Bonus 1"] } 
            }
        }
    },
    "Rufo": { 
        asideIcon: "https://i.postimg.cc/8j7jDVq8/Aside-Icon-Rufo.png", 
        totalName: { zh: "[中文願像總名稱]", ja: "[日文願像總名稱]", en: "[English Total Name]" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/t1RPt6n5/Aside-Skill-Rufo-1.png", 
                name: { zh: "[中文1星名稱]", ja: "[日文1星名稱]", en: "[English 1-Star Name]" }, 
                desc: { zh: "[中文1星描述]", ja: "[日文1星描述]", en: "[English 1-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/mcZMN91S/Aside-Skill-Rufo-2.png", 
                name: { zh: "[中文2星名稱]", ja: "[日文2星名稱]", en: "[English 2-Star Name]" }, 
                desc: { zh: "[中文2星描述]", ja: "[日文2星描述]", en: "[English 2-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/676RLZ4Y/Aside-Skill-Rufo-3.png", 
                name: { zh: "[中文3星名稱]", ja: "[日文3星名稱]", en: "[English 3-Star Name]" }, 
                desc: { zh: "[中文3星描述]", ja: "[日文3星描述]", en: "[English 3-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] }, 
                globalEffects: { zh: ["能力加成1"], ja: ["ステータスボーナス1"], en: ["Global Stat Bonus 1"] } 
            }
        }
    },
    "Selline": { 
        asideIcon: "https://i.postimg.cc/Mvnvx8gg/Aside-Icon-Selline.png", 
        totalName: { zh: "[中文願像總名稱]", ja: "[日文願像總名稱]", en: "[English Total Name]" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/hJ4xbmQw/Aside-Skill-Selline-1.png", 
                name: { zh: "[中文1星名稱]", ja: "[日文1星名稱]", en: "[English 1-Star Name]" }, 
                desc: { zh: "[中文1星描述]", ja: "[日文1星描述]", en: "[English 1-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/94x9xfyx/Aside-Skill-Selline-2.png", 
                name: { zh: "[中文2星名稱]", ja: "[日文2星名稱]", en: "[English 2-Star Name]" }, 
                desc: { zh: "[中文2星描述]", ja: "[日文2星描述]", en: "[English 2-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/1gWFWzDB/Aside-Skill-Selline-3.png", 
                name: { zh: "[中文3星名稱]", ja: "[日文3星名稱]", en: "[English 3-Star Name]" }, 
                desc: { zh: "[中文3星描述]", ja: "[日文3星描述]", en: "[English 3-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] }, 
                globalEffects: { zh: ["能力加成1"], ja: ["ステータスボーナス1"], en: ["Global Stat Bonus 1"] } 
            }
        }
    },
    "Sist": { 
        asideIcon: "https://i.postimg.cc/9rDrVjvj/Aside-Icon-Sist.png", 
        totalName: { zh: "[中文願像總名稱]", ja: "[日文願像總名稱]", en: "[English Total Name]" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/kVjSj5Ww/Aside-Skill-Sist-1.png", 
                name: { zh: "[中文1星名稱]", ja: "[日文1星名稱]", en: "[English 1-Star Name]" }, 
                desc: { zh: "[中文1星描述]", ja: "[日文1星描述]", en: "[English 1-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/3yLGLw2b/Aside-Skill-Sist-2.png", 
                name: { zh: "[中文2星名稱]", ja: "[日文2星名稱]", en: "[English 2-Star Name]" }, 
                desc: { zh: "[中文2星描述]", ja: "[日文2星描述]", en: "[English 2-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/LhGtKhGg/Aside-Skill-Sist-3.png", 
                name: { zh: "[中文3星名稱]", ja: "[日文3星名稱]", en: "[English 3-Star Name]" }, 
                desc: { zh: "[中文3星描述]", ja: "[日文3星描述]", en: "[English 3-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] }, 
                globalEffects: { zh: ["能力加成1"], ja: ["ステータスボーナス1"], en: ["Global Stat Bonus 1"] } 
            }
        }
    },
    "Snorky": { 
        asideIcon: "https://i.postimg.cc/nsB3PgH9/Aside-Icon-Snorky.png", 
        totalName: { zh: "[中文願像總名稱]", ja: "[日文願像總名稱]", en: "[English Total Name]" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/bsbQzpjz/Aside-Skill-Snorky-1.png", 
                name: { zh: "[中文1星名稱]", ja: "[日文1星名稱]", en: "[English 1-Star Name]" }, 
                desc: { zh: "[中文1星描述]", ja: "[日文1星描述]", en: "[English 1-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/c6PRy6Pg/Aside-Skill-Snorky-2.png", 
                name: { zh: "[中文2星名稱]", ja: "[日文2星名稱]", en: "[English 2-Star Name]" }, 
                desc: { zh: "[中文2星描述]", ja: "[日文2星描述]", en: "[English 2-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/nC7vHptc/Aside-Skill-Snorky-3.png", 
                name: { zh: "[中文3星名稱]", ja: "[日文3星名稱]", en: "[English 3-Star Name]" }, 
                desc: { zh: "[中文3星描述]", ja: "[日文3星描述]", en: "[English 3-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] }, 
                globalEffects: { zh: ["能力加成1"], ja: ["ステータスボーナス1"], en: ["Global Stat Bonus 1"] } 
            }
        }
    },
    "Ui": { 
        asideIcon: "https://i.postimg.cc/qzNz0d9T/Aside-Icon-Ui.png", 
        totalName: { zh: "[中文願像總名稱]", ja: "[日文願像總名稱]", en: "[English Total Name]" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/tYPhXpHY/Aside-Skill-Ui-1.png", 
                name: { zh: "[中文1星名稱]", ja: "[日文1星名稱]", en: "[English 1-Star Name]" }, 
                desc: { zh: "[中文1星描述]", ja: "[日文1星描述]", en: "[English 1-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/WhrM2TP3/Aside-Skill-Ui-2.png", 
                name: { zh: "[中文2星名稱]", ja: "[日文2星名稱]", en: "[English 2-Star Name]" }, 
                desc: { zh: "[中文2星描述]", ja: "[日文2星描述]", en: "[English 2-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/rKWS8MLs/Aside-Skill-Ui-3.png", 
                name: { zh: "[中文3星名稱]", ja: "[日文3星名稱]", en: "[English 3-Star Name]" }, 
                desc: { zh: "[中文3星描述]", ja: "[日文3星描述]", en: "[English 3-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] }, 
                globalEffects: { zh: ["能力加成1"], ja: ["ステータスボーナス1"], en: ["Global Stat Bonus 1"] } 
            }
        }
    },
    "Vivi": { 
        asideIcon: "https://i.postimg.cc/mtPtRG0b/Aside-Icon-Vivi.png", 
        totalName: { zh: "[中文願像總名稱]", ja: "[日文願像總名稱]", en: "[English Total Name]" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/MvRyWq8M/Aside-Skill-Vivi-1.png", 
                name: { zh: "[中文1星名稱]", ja: "[日文1星名稱]", en: "[English 1-Star Name]" }, 
                desc: { zh: "[中文1星描述]", ja: "[日文1星描述]", en: "[English 1-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/9rTGWCjq/Aside-skill-vivi-2.png", 
                name: { zh: "[中文2星名稱]", ja: "[日文2星名稱]", en: "[English 2-Star Name]" }, 
                desc: { zh: "[中文2星描述]", ja: "[日文2星描述]", en: "[English 2-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/F7cj9NQk/Aside-skill-vivi-3.png", 
                name: { zh: "[中文3星名稱]", ja: "[日文3星名稱]", en: "[English 3-Star Name]" }, 
                desc: { zh: "[中文3星描述]", ja: "[日文3星描述]", en: "[English 3-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] }, 
                globalEffects: { zh: ["能力加成1"], ja: ["ステータスボーナス1"], en: ["Global Stat Bonus 1"] } 
            }
        }
    },
    "xXionx": { 
        asideIcon: "https://i.postimg.cc/vc4cMdpY/Aside-Icon-x-Xionx.png", 
        totalName: { zh: "[中文願像總名稱]", ja: "[日文願像總名稱]", en: "[English Total Name]" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/1f6p9sZq/Aside-Skill-x-Xionx-1.png", 
                name: { zh: "[中文1星名稱]", ja: "[日文1星名稱]", en: "[English 1-Star Name]" }, 
                desc: { zh: "[中文1星描述]", ja: "[日文1星描述]", en: "[English 1-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/qzn8k4dK/Aside-Skill-x-Xionx-2.png", 
                name: { zh: "[中文2星名稱]", ja: "[日文2星名稱]", en: "[English 2-Star Name]" }, 
                desc: { zh: "[中文2星描述]", ja: "[日文2星描述]", en: "[English 2-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/CzDjFSVC/Aside-Skill-x-Xionx-3.png", 
                name: { zh: "[中文3星名稱]", ja: "[日文3星名稱]", en: "[English 3-Star Name]" }, 
                desc: { zh: "[中文3星描述]", ja: "[日文3星描述]", en: "[English 3-Star Desc]" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] }, 
                globalEffects: { zh: ["能力加成1"], ja: ["ステータスボーナス1"], en: ["Global Stat Bonus 1"] } 
            }
        }
    }
};
