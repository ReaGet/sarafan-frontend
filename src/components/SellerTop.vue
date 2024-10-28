<template>
    <div class="app-container">
        <div class="seller-top-container">
            <div class="seller-top-left-part">
                <img src="/src/assets/seller-avatar.jpg" alt="seller-avatar" class="seller-avatar">
                <h2 class="seller-name">Владимир IT</h2>
            </div>

            <a href="" class="link-item">

            </a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.seller-top-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.seller-top-left-part {
    display: flex;
    align-items: center;
}

.seller-avatar {
    width: 44px;
    height: 44px;
    object-fit: cover;
    border-radius: 15px;
}

.seller-name {
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 2%;
    margin-left: 15px;
    position: relative;
    padding-right: 20px;

    &::before {
        content: "";
        width: 10px;
        height: 10px;
        position: absolute;
        background-image: url("src/assets/arrow-right-grey.svg");
        background-repeat: no-repeat;
        background-size: contain;
        width: 4px;
        height: 8px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
    }
}

.link-item {
    background-color: #F5F7FA;
    border-radius: 15px;
    width: 54px;
    height: 41px;
    position: relative;
    &:before {
        content: "";
        background-image: url("src/assets/link-arrow-grey.svg");
        position: absolute;
        top: 8px;
        left: 50%;
        transform: translateX(-50%);
        width: 24px;
        height: 24px;
    }
}
</style>