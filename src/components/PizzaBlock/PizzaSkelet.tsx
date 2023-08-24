import React from "react"
import ContentLoader from "react-content-loader"

const PizzaSkelet: React.FC = () => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={480}
        viewBox="0 0 280 465"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <circle cx="140" cy="130" r="120" />
        <rect x="0" y="260" rx="10" ry="10" width="280" height="32" />
        <rect x="0" y="300" rx="10" ry="10" width="280" height="88" />
        <rect x="0" y="420" rx="10" ry="10" width="95" height="30" />
        <rect x="122" y="410" rx="25" ry="25" width="152" height="45" />
    </ContentLoader>
)

export default PizzaSkelet