import gradient from "../../assets/gradient.png";

export default function Gradient({
    animationClass,
    top,
    right,
    left,
    bottom,
    width,
    rotation,
    priority,
    opacity,
}: {
    animationClass?: string;
    top?: string;
    right?: string;
    left?: string;
    bottom?: string;
    width?: string;
    rotation?: string;
    priority?: boolean;
    opacity?: number;
}) {
    return (
        <img
            className={`gradient ${animationClass}`}
            src={gradient}
            loading={priority ? "eager" : "lazy"}
            style={{
                top: top,
                right: right,
                left: left,
                bottom: bottom,
                width: width,
                opacity: opacity,
                transform: `rotate(${rotation})`,
            }}
            alt="gradient-background"
        />
    );
}
