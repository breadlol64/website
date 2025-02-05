<template>
    <div class="pricing-card">
        <div class="card-header">
            <h2>{{ title }}</h2>
            <p>{{ subtitle }}</p>
        </div>
        <div class="card-body">
            <h3>{{ price }}</h3>
            <ul>
                <li v-for="feature in features" :key="feature">{{ feature }}</li>
            </ul>
        </div>
        <div class="card-footer">
            <button @click="onButtonClick">{{ buttonText }}</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PricingCard',
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: false,
            default: ''
        },
        price: {
            type: String,
            required: true
        },
        features: {
            type: Array,
            required: true
        },
        buttonText: {
            type: String,
            required: true
        }
    },
    methods: {
        onButtonClick() {
            this.$emit('button-click')
        }
    }
}
</script>

<style scoped>
.pricing-card {
    border: 1px solid #3d3d3d;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    max-width: 300px;
    margin: 0 auto;
}

.card-header h2 {
    margin: 0;
    font-size: 24px;
}

.card-header p {
    margin: 0;
    color: #888;
}

.card-body h3 {
    margin: 16px 0;
    font-size: 32px;
}

.card-body ul {
    list-style: none;
    padding: 0;
}

.card-body li {
    margin: 8px 0;
}

.card-footer button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
}

.card-footer button:hover {
    background-color: #0056b3;
}
</style>