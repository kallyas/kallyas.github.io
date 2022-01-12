<template>
    <div class="footer">
        <div class="footer__row contact">
            <div class="contact__textbox">
                <img class="logo" src='../../assets/images/labs_logo_white.svg' alt="ATLabs-logo">
                <p>
                    <span>Muhoya Avenue, Mbambane Rd.</span>
                    <span>Lavington, Nairobi. Kenya</span>
                </p>
                <p>
                    <span>+254 729 891 801</span>
                    <span>info@at-labs.io</span>
                </p>
            </div>
            <!-- <div class="contact__newsletterbox-container">
                <div class="contact__newsletterbox">
                    <input class="newsletterbox__input" placeholder="Sign Up for our Newsletter">
                    <img class="newsletterbox__image" src='../../assets/images/Next.svg' alt="">
                </div>
            </div> -->
        </div>
        <div class="footer__row meta">
            <router-link class="meta__item" to="/">2020 atlabs</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppFooter',
};
</script>

<style scoped>
.footer {
    padding: 7vh 0;
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    color: var(--grey);
}

.footer__row.contact {
    position: relative;
    display: flex;
    margin-bottom: 10vh;
}

.footer__row.contact::after{
    position: absolute;
    content: '';
    background-color: var(--grey);
    width: 100%;
    height: 1px;
    bottom: -35%;
}

.contact__textbox {
    flex: 3;
    display: flex;
    justify-content: space-around;
    text-align: center;
}

.contact__textbox .logo {
    width: 90px;
}

.contact__textbox span {
    display: block;
}

.contact__newsletterbox-container {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.contact__newsletterbox {
    display: flex;
    border-radius: 10px;
    height: 44px;
    width: fit-content;
    background-color: var(--accent);
    margin-left: 15px;
}

.newsletterbox__input {
    border-radius: 10px 0px 0px 10px;
    height: 100%;
    padding: 20px;
}

.newsletterbox__image {
    align-self: center;
    height: 40%;
    padding: 0 30px;
    cursor: pointer;
}

.footer__row.meta {
    display: flex;
    justify-content: center;
}

.meta__item {
    color: var(--grey);
}

@media only screen and (max-width : 768px) { /* Laptops */
    .footer__row.contact {
        flex-direction: column;
    }

    .contact__newsletterbox-container{
        margin-top: 50px;
        justify-content: center;
    }

    .newsletterbox__input {
        width: 60vw;
    }

}

@media only screen and (max-width : 480px) { /* mobile-landscape */
    .footer {
        font-size: 9px;
        padding: 7vh 0;
        max-width: 90%;
        margin: 0 auto;
    }

    .footer__row.contact::after{
        bottom: -20%;
    }

    .contact__textbox .logo {
        width: 60px;
    }

    .contact__newsletterbox {
        height: 40px;
    }

    .newsletterbox__input {
        padding: 10px;
    }
}

</style>
