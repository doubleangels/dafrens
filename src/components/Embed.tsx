function Embed() {
    return (
        <section className="embed" aria-label="Discord embed from Da Frens server">
            <iframe
                title="embed"
                src="https://discord.com/widget?id=691991366615564388&theme=dark"
                width="350"
                height="500"
                allowTransparency={true}
                frameBorder="0"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts">
            </iframe>
        </section>
    );
}

export default Embed;