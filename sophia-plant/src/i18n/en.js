//Define o dicionário em inglês
const en = {
    menu: {
        about: "About Me",
        projects: "Projects",
        experiences: "Experiences",
        contact: "Contact",
        home: "Home",
        greenhouse: "Greenhouse",
    },
    projects: {
        title: "Project's Garden",
        subtitle: "Tap a plant to see the project",
        viewMore: "View more",
        notFound: "Project not found",
        back: "Back",
    },
    home: {
        hero: {
            title: "Growing software with purpose.",
            description:
                "Software Developer focused on building modern, accessible, and sustainable web solutions using React, Java, Spring Boot, and solid architectural practices.",
            supportText:
                "Sophia.Plant is an ecosystem of projects, learning, and continuous growth built to transform ideas into meaningful digital experiences.",
            projects: "View Projects",
            contact: "Get in Touch",
            cardTitle:
                "Building solutions in constant evolution.",
            cardDescription:
                "Each project is treated as a growing plant: carefully planned, purposefully developed, and continuously improved."
        },
    
        about: {
            tag: "01 - About",
            title: "Who is behind Sophia.Plant?",
            subtitle:
                "Technology, continuous learning, and solution building.",
            paragraph1:
                "I am a software development student passionate about technology, user experience, and problem solving.",
            paragraph2:
                "Sophia.Plant was created as a space to bring together projects, knowledge, experiments, and professional growth within a single digital ecosystem.",
            action: "Learn about my journey"
        },
    
        projects: {
            tag: "02 - Projects",
            title: "Projects in growth",
            subtitle:
                "Solutions that represent learning, evolution, and continuous practice.",
            viewAll: "View all projects",
    
            sophiaPlant: {
                title: "Sophia.Plant",
                description:
                    "Personal portfolio built with React, Vite, and a custom Design System to centralize projects, experiences, and professional growth."
            },
    
            greenhouse: {
                title: "Greenhouse",
                description:
                    "Living documentation of the Design System that ensures consistency, accessibility, and scalability throughout the ecosystem."
            },
    
            api: {
                title: "Spring Boot API",
                description:
                    "Project focused on building modern APIs using Java, Spring Boot, and clean architecture practices."
            },
    
            action: "Explore"
        },
    
        technologies: {
            tag: "03 - Technologies",
            title: "Technologies I use",
            subtitle:
                "Tools used to transform ideas into solutions."
        },
    
        process: {
            tag: "04 - Process",
            title: "From idea to product",
            subtitle:
                "A structured approach to building quality software.",
    
            planning: {
                title: "Planning",
                description:
                    "Understanding the problem, defining goals, and structuring the solution."
            },
    
            design: {
                title: "Design",
                description:
                    "Building the experience through interface design, usability, and visual consistency."
            },
    
            development: {
                title: "Development",
                description:
                    "Implementation focused on code quality, performance, and maintainability."
            },
    
            evolution: {
                title: "Evolution",
                description:
                    "Continuous iteration driven by learning, testing, and feedback."
            }
        },
    
        footer: {
            title: "Shall we build something together?",
            description:
                "I am always open to new challenges, opportunities, collaborations, and interesting projects.",
            action: "Get in Touch"
        },
        
    },
    about: {
        hero: {
            tag: "About Me",
            title: "Who is behind Sophia.Plant?",
            subtitle:
                "Technology, continuous learning and building solutions with purpose."
        },
    
        profile: {
            name: "Sophia",
            role: "Software Engineering Student",
            details: "Brazil • Sophia.Plant"
        },
    
        story: {
            tag: "01 - Story",
    
            title:
                "Learning is creating space for new possibilities.",
    
            intro:
                "I'm Sophia Ferreira, a Software Engineering student. This portfolio brings together what I am learning and the projects I want to share.",
    
            paragraph1:
                "My interest in technology started with curiosity about how systems work and how they could improve people's lives.",
    
            paragraph2:
                "Throughout my journey I found software development to be a way of transforming learning into meaningful experiences.",
    
            paragraph3:
                "Each project is an opportunity to evolve technically, strengthen critical thinking and cultivate new skills.",
    
            note:
                "Sophia.Plant represents that continuous growth process through technology."
        },
    
        values: {
            tag: "02 - Values",
    
            title:
                "Principles that guide my work",
    
            learning: {
                title: "Continuous Learning",
                description:
                    "Continuous learning is an essential part of building a strong career in technology."
            },
    
            quality: {
                title: "Quality",
                description:
                    "I strive to create organized, maintainable and easy-to-evolve solutions."
            },
    
            accessibility: {
                title: "Accessibility",
                description:
                    "Digital experiences should be inclusive and usable by everyone."
            },
    
            purpose: {
                title: "Purpose",
                description:
                    "Every solution should exist to solve a real problem."
            }
        },
    
        stack: {
            tag: "03 - Technologies",
            title: "Tools I Use",
            subtitle:
                "Technologies I use to transform ideas into solutions."
        },
    
        timeline: {
            tag: "04 - Growth",
            title: "A journey under construction.",
    
            step1: {
                title: "First Studies",
                description:
                    "Learning programming logic and software development fundamentals."
            },
    
            step2: {
                title: "First Projects",
                description:
                    "Building first applications and consolidating technical knowledge."
            },
    
            step3: {
                title: "Sophia.Plant",
                description:
                    "Creation of an ecosystem to centralize projects, experiences and professional growth."
            },
    
            step4: {
                title: "Next Steps",
                description:
                    "Expanding knowledge and building increasingly complete solutions."
            }
        },
    
        goals: {
            tag: "05 - Goals",
    
            title:
                "Where am I growing toward?",
    
            description:
                "I seek opportunities to grow as a developer, collaborate on challenging projects and build solutions that create positive impact."
        },
    
        footer: {
            title: "Explore My Projects",
            description:
                "The best way to learn about my work is by exploring the solutions I have been building.",
            action: "Explore Projects"
        }
    },
    designSystem: {
        hero: {
            tag: "Design System",
            title: "GREENHOUSE",
            description:
                "Components, visual patterns and decisions that support the entire Sophia.Plant ecosystem.",
            supportText:
                "Greenhouse documents foundations, tokens, components and patterns to ensure consistency, clarity and accessibility.",
            back: "Back to Garden",
        },
    
        architecture: {
            tag: "01 - Architecture",
            title: "From roots to pages",
            subtitle:
                "Each layer inherits from the previous one and adds context to the ecosystem.",
    
            steps: {
                foundations: {
                    title: "Foundations",
                    description:
                        "Brand, color and typography.",
                },
                tokens: {
                    title: "Tokens",
                    description:
                        "Reusable semantic values.",
                },
                components: {
                    title: "Components",
                    description:
                        "Reusable building blocks built upon tokens.",
                },
                pages: {
                    title: "Pages",
                    description:
                        "Complete user experiences.",
                },
            },
        },
    
        foundations: {
            tag: "02 - Foundations",
            title: "Brand, Color and Typography",
            subtitle:
                "The identity that supports the entire experience.",
        
            identity: "Identity",
            paletteTitle: "Palette",
            typographyTitle: "Typography",

            palette: {
                cream: "Primary background.",
                leaf: "Actions and headings.",
                sprout: "Soft surfaces.",
                moss: "Secondary backgrounds.",
                petal: "Highlights.",
                soil: "Supporting text.",
                sand: "Badges and details."
            },
        
            identityDescription:
                "The plant symbolizes continuous evolution, learning and project maturity.",
        
            identityGuideline:
                "Preserve original proportions, maintain visual breathing space and avoid replacing it with generic icons.",
        
            typography: {
                h1: "Building software with purpose.",
                h2: "Projects in growth.",
                h3: "Experiences.",
        
                body:
                    "Text used for reading, forms, descriptions, messages and primary interface communication.",
        
                small:
                    "Metadata, notes, supporting content and low-priority information.",
        
                h1Label:
                    "H1 · Lora · Hero sections and page titles.",
        
                h2Label:
                    "H2 · Lora · Main sections.",
        
                h3Label:
                    "H3 · Lora · Subsections and content groups.",
        
                bodyLabel:
                    "Body · Inter · 16px",
        
                smallLabel:
                    "Small · Inter · 12px",
            },
        },
    
        tokens: {
            tag: "03 - Design Tokens",
            title: "Core tokens",
            subtitle:
                "Reusable values connecting intention and interface.",
    
            spacing: "Spacing",
            radius: "Radius",
            elevation: "Elevation",
            motion: "Motion",
        },
    
        components: {
            tag: "04 - Components",
            title:
                "Components that cultivate consistency",
    
            subtitle:
                "Reusable visual library for Sophia.Plant.",
    
            convention: "Convention",
            buttons: "Buttons",
            tags: "Tags",
            formsTitle: "Forms",
            maturity: "Maturity",
            forms: {
                title: "Forms",
                name: "Name",
                namePlaceholder: "Enter your name",
                email: "Email",
                emailError: "Please enter a valid email.",
                message: "Message",
                messagePlaceholder: "Tell me about your project..."
            },
        },
    
        patterns: {
            tag: "05 - Patterns",
            title:
                "Patterns that organize the garden",
    
            subtitle:
                "Recurring structures that turn standalone components into complete experiences.",
            maturity: {
                title: "Maturity Stages",
                description:
                    "System used to indicate the current stage of evolution of each project within the Sophia.Plant ecosystem.",
        
                seed:
                    "Planning, research, and definition of the project's initial goals.",
        
                sprout:
                    "Active development, early testing, and validation of the first versions.",
        
                flower:
                    "Completed, documented solution ready to receive future improvements."
            },
            contactCard: {
                title: "Contact Card",
            
                description:
                    "Pattern used to display contact channels in a clear, accessible, and consistent way across different application contexts.",
            
                email: "sophia@email.com",
            
                emailDescription:
                    "Primary channel for networking, opportunities, collaboration, and idea exchange.",
            
                action: "Get in touch"
            }
        },
    
        accessibility: {
            tag: "06 - Accessibility",
            title:
                "Care that includes people",
            subtitle:
                "Accessibility is a system requirement.",
    
            perceivable: "Perceivable",
            operable: "Operable",
            understandable: "Understandable",
            robust: "Robust",
            keyboardDescription: "All primary navigation elements can be accessed and used using only the keyboard."
        },
        footer: {
            title: "A system is never finished.",
            description:
                "Each new component should exist because it solves a real problem, communicates something important, and keeps the experience consistent.",
            back: "Back to Home"
        },
        navigation: {
            greenhouse: "Greenhouse",
        },
    },
    navigation: {
        greenhouse: "Greenhouse",
        home: "Home",
        about: "About",
        projects: "Projects",
        experiences: "Experiences",
        contact: "Contact"
    },
    lang: {label: "EN"}, //O que o botão mostra ao clicar
    maturity: {seed: "Seed", sprout: "Sprout", flower:"Flower"},
};
export default en;
