export function backgroundEffect() {

    let letters = "鄭鶴林"

    let snow = [];
    let count = 100;
    for (let i = 0; i < count; i++) {
        let duration = (Math.random() + 0.3) * 20;
        let size = Math.random() * 1;
        let sizeWH = Math.random() * 50;
        let divStyle = {
            left: Math.floor(Math.random() * window.innerWidth),
            width: sizeWH + size,
            height: sizeWH + size,
            opacity: Math.random() - 0.5,
            animationDuration: `${duration}s`,
        };
        snow.push(
            <div
            key={`snow-${i}`}
            id={`snow-${i}`}
            className="snowDrop"
            style={divStyle}
            >{ i > 3 ? letters[Math.floor(i%3)] : letters[i] }</div>
        );
    }
    return snow;
}