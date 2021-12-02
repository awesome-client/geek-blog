import CommonStore from './common'

const common = new CommonStore()

const useStore = () => {
  return {
    common,
  }
}

export default useStore
