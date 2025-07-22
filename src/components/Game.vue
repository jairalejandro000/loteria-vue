<script setup>
import { onMounted, ref } from 'vue'
const cards = [
    { name: 'el gallo' },
    { name: 'el diablito' },
    { name: 'la dama' },
    { name: 'el catrin' },
    { name: 'el paraguas' },
    { name: 'la sirena' },
    { name: 'la escalera' },
    { name: 'la botella' },
    { name: 'el barril' },
    { name: 'el arbol' },
    { name: 'el melon' },
    { name: 'el valiente' },
    { name: 'el gorrito' },
    { name: 'la muerte' },
    { name: 'la pera' },
    { name: 'la bandera' },
    { name: 'el bandolon' },
    { name: 'el violoncello' },
    { name: 'la garza' },
    { name: 'el pajaro' },
    { name: 'la mano' },
    { name: 'la bota' },
    { name: 'la luna' },
    { name: 'el cotorro' },
    { name: 'el borracho' },
    { name: 'el negrito' },
    { name: 'el corazon' },
    { name: 'la sandia' },
    { name: 'el tambor' },
    { name: 'el camaron' },
    { name: 'las jaras' },
    { name: 'el musico' },
    { name: 'la araña' },
    { name: 'el soldado' },
    { name: 'la estrella' },
    { name: 'el cazo' },
    { name: 'el mundo' },
    { name: 'el apache' },
    { name: 'el nopal' },
    { name: 'el alacran' },
    { name: 'la rosa' },
    { name: 'la calavera' },
    { name: 'la campana' },
    { name: 'el cantarito' },
    { name: 'el venado' },
    { name: 'el sol' },
    { name: 'la corona' },
    { name: 'la chalupa' },
    { name: 'el pino' },
    { name: 'el pescado' },
    { name: 'la palma' },
    { name: 'la maceta' },
    { name: 'el arpa' },
    { name: 'la araña' },
    // { name: 'base' },
    // { name: 'fondo' }
]
const images = import.meta.glob('../assets/img/loteria_cards/*.jpg', { eager: true })
const cardsCopy = [...cards]
const getImagePath = () => {
    if (!card.value?.name) return ''
    const name = card.value.name.toLowerCase()
    const match = Object.entries(images).find(([path]) =>
        path.toLowerCase().includes(name)
    )
    return match ? match[1].default : ''
}
const cardsShuffled = ref([])
const shuffle = () => {
    while (cardsCopy.length > 0) {
        let random = Math.floor(Math.random() * cardsCopy.length)
        cardsShuffled.value.push(cardsCopy[random])
        cardsCopy.splice(random, 1)
    }
}
const configGame = ref(false)
// const game = ref(false)
const startGame = () => {
    game.value = true
    // configGame.value = true
    shuffle()
    console.log(configGame)
}
const index = ref(0)
const card = ref({})
const changeCard = (next) => {
    if (next) {
        index.value += 1
    } else {
        index.value -= 1
    }
    card.value = cardsShuffled.value[index.value - 1]
}
onMounted(() => {
    shuffle()
})
</script>

<template>
    <!-- <template v-if="!game">
        <Button label="Iniciar juego" @click="startGame()" />
    </template>
    <Dialog v-model:visible="configGame" modal header="Edit Profile" >
        <span class="text-surface-500 dark:text-surface-400 block mb-8">Configurar juego</span>
        <RadioButtonGroup>
            <div class="flex items-center gap-2">
                <RadioButton />
                <label for="cheese">Cheese</label>
            </div>
            <div class="flex items-center gap-2">
                <RadioButton inputId="mushroom" value="Mushroom" />
                <label for="mushroom">Mushroom</label>
            </div>
        </RadioButtonGroup>
        <div class="flex justify-end gap-2">
            <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
            <Button type="button" label="Save" @click="visible = false"></Button>
        </div>
    </Dialog> -->
    <Button label="Siguente" :disabled="index == card.length" @click="changeCard(true)" />
    <Button label="Anterior" :disabled="index == 0" @click="changeCard(false)" />
    <Card>
        <template #title>{{ card?.name || 'Sin cartas' }}</template>
        <template #content>       
            <img :src="card ? getImagePath() : '../assets/img/loteria_cards/base.jpg' " :alt="card.name">
        </template>
    </Card>
</template>