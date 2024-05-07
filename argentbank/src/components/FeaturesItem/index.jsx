function Items(props) { 
    return (
        <div class="feature-item">
            <img
                // src="../img/icon-money.png"
                src={props.src}
                // alt="Chat Icon"
                alt={props.alt}
                class="feature-icon"
            />
            <h3 class="feature-item-title">{props.title}</h3>
            <p>
                {props.description}
            </p>
        </div>
    )
}

export default Items;