<template>
    <div class="product-card">
        <div class="product-img" style="background-image: url('src/assets/product-image.png')"></div>
        <p class="product-title">Пицца “Японская”</p>
        <a href="" class="buy-btn">
            <img src="/src/assets/buy-icon.svg" class="buy-btn-icon" />
            <div class="buy-btn-text">900 ₽</div>
        </a>
    </div>
</template>


<style lang="scss" scoped>
.product-card {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.buy-btn-text {
    font-size: 14px;
    font-weight: 700;
}

.buy-btn {
    width: 100%;
    display: inline-block;
    height: 40px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: #F5F7FA;
    border-radius: 15px;
    margin-top: 15px;
}

.product-img {
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;

    &::after {
        content: "";
        display: block;
        padding-top: 100%;
    }
}

.product-title {
    margin-top: 10px;
    font-size: 14px;
    text-align: left;
    width: 100%;
}
</style>