const Memory = require('./memory')
const memory = new Memory

class Array {
  constructor() {
    this.length = 0
    this._capacity = 0
    this.ptr = memory.allocate(this.length)
  }

  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO)
    }

    memory.set(this.ptr + this.length, value);
    this.length++;

  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size)
    // since this.ptr = memory.allocate(size), if this.ptr = null
    // implies there is not enough memory to allocate to new ptr
    // and this.ptr === null, will throw error
    if (this.ptr === null) {
      throw new Error('Out of memory')
    }
    memory.copy(this.ptr, oldPtr, this.length)
    memory.free(oldPtr)
    this._capacity = size
  }

  // retrieve values from the array
  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error')
    }
    return memory.get(this.ptr + index)
  }

  // pop off the last value in the array
  pop() {
    // if the Array is empty, throw error
    if (this.length === 0) {
      throw new Error('Index error')
    }
    const value = memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }

  // insert value into the array (indexes/items that already exist in the arary)
  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error')
    } 
    // if Array size is at or above capacity, it will resize
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO)
    }

    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index)
    memory.set(this.ptr + index, value)
    this.length++
  }

  // remove specified values from the arary
  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error')
    }

    memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1)
    this.length--
  }

  // custom function to empty array (except remaining value -- not sure why this doesn't work)
  // needs additional pop() after this function is called to completely empty the array
  empty() {
    for (let i=0; i < this.length; i++) {
      this.pop()
    }
    console.log(this.length)
  }

}

Array.SIZE_RATIO = 3

module.exports = Array