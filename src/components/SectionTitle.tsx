import React from "react";

export default function SectionTitle({
    children,
    withInSection,
}: {
    children: React.ReactNode;
    withInSection?: boolean;
}) {
    return (
        <h2
            className={`section-title ${
                withInSection ? "title-in-section" : ""
            }`}
        >
            {children}
        </h2>
    );
}
