pub contract FruitStore {

    pub var fruit: String

    pub fun changeFruit(newFruit: String) {
        self.fruit = newFruit
    }

    init() {
        self.fruit = "apple"
    }
}