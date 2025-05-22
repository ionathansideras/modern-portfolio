import gradient from "../assets/gradient.png";

export default function Gradient({
    animateClass,
    top,
    right,
    left,
    bottom,
    width,
    rotation,
}: {
    animateClass?: string;
    top?: string;
    right?: string;
    left?: string;
    bottom?: string;
    width?: string;
    rotation?: string;
}) {
    return (
        <img
            className={`gradient ${animateClass}`}
            src={gradient}
            style={{
                top: top,
                right: right,
                left: left,
                bottom: bottom,
                width: width,
                transform: `rotate(${rotation})`,
            }}
            alt="gradient-background"
        />
    );
}
