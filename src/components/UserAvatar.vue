<template>
    <div class="avatar">
        <div class="circle"
        :style="{ width: size + 'px', height: size + 'px', borderRadius: size / 2 + 'px'}"
        >
            <span
            :style="{lineHeight: size + 'px',height: size + 'px',textAlign: 'center',width: size + 'px'}"
            >
                {{name.slice(0,1)}}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: ''
        },
        size: {
            type: Number,
            default: 46
        }
    },
    data() {
        return {
        }
    }
}
</script>

<style>
.avatar {
    display: flex;
}
.circle {
    background-color: red;
    border-radius: 25px 25px;
    display:flex;
    box-sizing: border-box;
    text-align: center;
}
</style>