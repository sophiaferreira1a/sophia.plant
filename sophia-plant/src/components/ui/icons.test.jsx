import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
    SproutLogo,
    ArrowUpRight,
    MailIcon,
    GitHubIcon,
    LinkedInIcon,
} from "../icons.jsx";

const icons = [
    ["SproutLogo", SproutLogo],
    ["ArrowUpRight", ArrowUpRight],
    ["MailIcon", MailIcon],
    ["GitHubIcon", GitHubIcon],
    ["LinkedInIcon", LinkedInIcon],
];

describe("icons", () => {
    describe.each(icons)("%s", (_, Icon) => {
        it("renderiza um svg", () => {
            const { container } = render(<Icon />);

            expect(
                container.querySelector("svg")
            ).toBeInTheDocument();
        });

        it("recebe className personalizada", () => {
            const { container } = render(
                <Icon className="h-6 w-6 text-leaf" />
            );

            const svg = container.querySelector("svg");

            expect(svg).toHaveClass("h-6");
            expect(svg).toHaveClass("w-6");
            expect(svg).toHaveClass("text-leaf");
        });

        it("encaminha props SVG", () => {
            const { container } = render(
                <Icon
                    data-testid="icon"
                    aria-label="custom icon"
                />
            );

            const svg = container.querySelector("svg");

            expect(svg).toHaveAttribute(
                "data-testid",
                "icon"
            );

            expect(svg).toHaveAttribute(
                "aria-label",
                "custom icon"
            );
        });

        it("possui viewBox", () => {
            const { container } = render(<Icon />);

            const svg = container.querySelector("svg");

            expect(svg).toHaveAttribute("viewBox");
        });
    });
});

