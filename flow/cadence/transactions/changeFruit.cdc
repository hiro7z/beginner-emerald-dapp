import FruitStore from "../contracts/FruitStore.cdc"

transaction(myNewFruit: String) {

  prepare(signer: AuthAccount) {}

  execute {
    FruitStore.changeFruit(newFruit: myNewFruit)
  }
}