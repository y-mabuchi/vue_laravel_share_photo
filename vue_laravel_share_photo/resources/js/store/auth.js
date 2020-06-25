import { OK, CREATED, UNPROCESSABLE_ENTITY } from '../util'

const state = {
  user: null,
  apiStatus: null,
  loginErrorMessages: null,
  registerErrorMessages: null
}

const getters = {
  check: state => !!state.user,
  username: state => state.user ? state.user.name : ''
}

const mutations = {
  setUser(state, user) {
    state.user = user
  },
  setApiStatus(state, status) {
    state.apiStatus = status
  },
  setLoginErrorMessages(state, messages) {
    state.loginErrorMessages = messages
  },
  setRegisterErrorMessages(state, messages) {
    state.registerErrorMessages = messages
  }
}

const actions = {
  // 会員登録
  async register(context, data) {
    // 最初にAPIステータスをリセット
    context.commit('setApiStatus', null)

    // APIにアクセス
    const response = await axios.post('/api/register', data)

    // 登録成功の場合
    if (response.status === CREATED) {
      context.commit('setApiStatus', true)
      context.commit('setUser', response.data)
      return false
    }

    // 失敗の場合
    context.commit('setApiStatus', false)

    if (response.status === UNPROCESSABLE_ENTITY) {
      // バリデーションエラーの場合
      context.commit('setRegisterErrorMessages', response.data.errors)
    } else {
      // システムエラーの場合
      context.commit('error/setCode', response.status, { root: true })
    }
  },

  // ログイン
  async login(context, data) {
    // 最初は、APIステータスにnullをセット
    context.commit('setApiStatus', null)

    // API通信の結果を取得
    const response = await axios.post('/api/login', data)

    if (response.status === OK) {
      // 成功だったらAPIステータスにtrueをセット
      context.commit('setApiStatus', true)
      context.commit('setUser', response.data)
      return false
    }

    // 失敗だったらAPIステータスにfalseをセット
    context.commit('setApiStatus', false)

    if (response.status === UNPROCESSABLE_ENTITY) {
      // バリデーションの場合はルートコンポーネントに渡さない
      context.commit('setLoginErrorMessages', response.data.errors)
    } else {
      // 別モジュールのミューテーションを呼び出し(第三引数に{root: trure}が必要)
      context.commit('error/setCode', response.status, { root: true })
    }
  },

  // ログアウト
  async logout(context) {
    // APIステータスをリセット
    context.commit('setApiStatus', null)

    // APIにアクセス
    const response = await axios.post('/api/logout')

    // 成功の場合
    if (response.status === OK) {
      context.commit('setApiStatus', true)
      context.commit('setUser', null)
      return false
    }

    // 失敗の場合
    context.commit('setApiStatus', false)
    context.commit('error/setCode', response.status, { root: true })
  },

  // ログインユーザーチェック
  async currentUser(context) {
    // APIステータスをリセット
    context.commit('setApiStatus', null)

    // APIにアクセス
    const response = await axios.get('/api/user')
    const user = response.data || null

    // 成功の場合
    if (response.status === OK) {
      context.commit('setApiStatus', true)
      context.commit('setUser', user)
      return false
    }

    // 失敗の場合
    context.commit('setApiStatus', false)
    context.commit('error/setCode', response.status, { root: true })
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}