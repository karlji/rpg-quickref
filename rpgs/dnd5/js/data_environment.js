// Effects that obscure vision can prove a significant hindrance to most adventuring tasks.
// ---
data_environment_obscurance = [
    {
        title: "Lightly Obscured",
        icon: "bleeding-eye",
        subtitle: "Disadvantage on Perception",
        description: "Dim light, patchy fog, moderate foliage.",
        reference: "SRD 5.2.1 — Rules Glossary: Obscurance.",
        bullets: [
            "Creatures have **disadvantage on Wisdom (Perception) checks** that rely on sight."
        ]
    },
    {
        title: "Heavily Obscured",
        icon: "lightning-tear",
        subtitle: "Effectively blind",
        description: "Darkness, opaque fog, dense foliage.",
        reference: "SRD 5.2.1 — Rules Glossary: Obscurance.",
        bullets: [
            "A creature in a heavily obscured area effectively suffers from the **Blinded** condition."
        ]
    }
]

// The presence or absence of light in an environment creates three categories of illumination.
// ---
data_environment_light = [
    {
        title: "Bright light",
        icon: "star-pupil",
        subtitle: "Normal vision",
        description: "Bright light lets most creatures see normally",
        reference: "SRD 5.2.1 — Rules Glossary: Lighting.",
        bullets: [
            "Gloomy days still provide bright light, as do torches, lanterns, fires, and other sources of illumination within a specific radius."
        ]
    },
    {
        title: "Dim light",
        icon: "semi-closed-eye",
        subtitle: "Lightly obscured",
        description: "Dim light, also called shadows, creates a lightly obscured area.",
        reference: "SRD 5.2.1 — Rules Glossary: Lighting.",
        bullets: [
            "An area of dim light is usually a boundary between a source of bright light, such as a torch, and surrounding darkness."
        ]
    },
    {
        title: "Darkness",
        icon: "bleeding-eye",
        subtitle: "Heavily obscured",
        description: "Darkness creates a heavily obscured area. Creatures face all the effects of the Blinded condition.",
        reference: "SRD 5.2.1 — Rules Glossary: Lighting.",
        bullets: [
            "Creatures that have Darkvision can see normally in darkness to a specified distance."
        ]
    }
]

// Some creatures have extraordinary senses that allow them to perceive their environment.
// ---
data_environment_senses = [
    {
        title: "Blindsight",
        icon: "blindfold",
        subtitle: "Perceive without sight",
        description: "A creature with blindsight can perceive its surroundings without relying on sight, within a specific radius.",
        reference: "SRD 5.2.1 — Rules Glossary: Senses.",
        bullets: [
            "Creatures without eyes, such as an ooze, have blindsight, as do creatures that rely on echolocation or heightened senses other than sight."
        ]
    },
    {
        title: "Darkvision",
        icon: "night-sky",
        subtitle: "See in dim light & darkness",
        description: "A creature with darkvision can see in dim light as if it were bright light and in darkness as if it were dim light.",
        reference: "SRD 5.2.1 — Rules Glossary: Senses.",
        bullets: [
            "A creature with darkvision can't discern color in darkness, only shades of gray."
        ]
    },
    {
        title: "Tremorsense",
        icon: "vibrating-ball",
        subtitle: "Sense vibrations",
        description: "A creature with tremorsense can detect and pinpoint the origin of vibrations within a specific radius, provided that it is in contact with the ground or a similar surface.",
        reference: "SRD 5.2.1 — Rules Glossary: Senses.",
        bullets: [
            "Tremorsense can't be used to detect flying or incorporeal creatures."
        ]
    },
    {
        title: "True Seeing",
        icon: "eye-of-horus",
        subtitle: "See things as they are",
        description: "A creature with true seeing can see everything as it is, no matter the illusion or magical effect.",
        reference: "SRD 5.2.1 — Rules Glossary: Senses.",
        bullets: [
            "It can see in normal and magical darkness, see invisible creatures and objects, automatically detect visual illusions and succeed on saving throws against them, and perceive the original form of a shapechanger."
        ]
    }
]

// Obstacles can provide cover during combat, making a target more difficult to harm.
// ---
data_environment_cover = [
    {
        title: "Half cover",
        icon: "cracked-shield",
        subtitle: "+2 to AC and Dex saves",
        description: "A target has half cover if an obstacle blocks at least half of the target's body.",
        reference: "SRD 5.2.1 — Rules Glossary: Cover.",
        bullets: [
            "The obstacle might be a low wall, a piece of furniture, or a creature, whether that creature is an enemy or a friend.",
            "A target with half cover has a **+2 bonus to AC and Dexterity saving throws**."
        ]
    },
    {
        title: "Three-quarters cover",
        icon: "cracked-shield",
        subtitle: "+5 to AC and Dex saves",
        description: "A target has three-quarters cover if an obstacle blocks at least three-quarters of the target's body.",
        reference: "SRD 5.2.1 — Rules Glossary: Cover.",
        bullets: [
            "The obstacle might be a portcullis, an arrow slit, or a thick tree trunk.",
            "A target with three-quarters cover has a **+5 bonus to AC and Dexterity saving throws**."
        ]
    },
    {
        title: "Total cover",
        icon: "shield",
        subtitle: "Completely concealed",
        description: "A target has total cover if it is completely concealed by an obstacle.",
        reference: "SRD 5.2.1 — Rules Glossary: Cover.",
        bullets: [
            "A target with total cover **can’t be targeted directly** by an attack or a spell, although some spells can reach such a target by including it in an area of effect."
        ]
    }
]