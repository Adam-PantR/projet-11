import Items from '../../components/FeaturesItem';

function features() { 
    return (
        <section class="features">
            <h2 class="sr-only">Features</h2>
            <Items
                src="../img/icon-chat.png"
                title=" You are our #1 priority"
                alt="Chat Icon"
                description="Need to talk to a representative? You can get in touch through our
                    24/7 chat or through a phone call in less than 5 minutes."
                />
            <Items
                src='../img/icon-money.png' 
                title="More savings means higher rates"
                alt='Chat Icon' 
                description='The more you save with us, the higher your interest rate will be!' 
            />
            <Items
                src="../img/icon-security.png"
                title="Security you can trust"
                alt="Chat Icon"
                description="We use top of the line encryption to make sure your data and money
                is always safe."
            />
        </section>
    )
}

export default features;