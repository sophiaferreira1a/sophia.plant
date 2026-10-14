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
            accessibility: {
                keyboardDescription:
                    "All primary navigation elements can be accessed and used using only the keyboard."
            },
        },
        footer: {
            title: "A system is never finished.",
            description:
                "Each new component should exist because it solves a real problem, communicates something important, and keeps the experience consistent.",
            back: "Back to Garden"
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
