export default {
    state: {
        userName: '',
        sex: '',
        phone: ''
    },
    mutations: {
        setUserName(state, userName) {
            state.userName = userName
        },
        setSex(state, sex) {
            state.sex = sex
        },
        setPhone(state, phone) {
            state.phone = phone
        }
    },
    getters: {
        userNameAndPhone: state => state.userName + state.phone
    },
    actions: {
        // 这里的state和commit是定义
        getUserInfo({state,commit}, {userName, Age}) {
            return new Promise((resolve, reject) => {
                commit('setUserName', `我的名字是${userName}今年${Age}岁了`)
                resolve('我是actions异步返回的参数')
            }).catch (err => {
                reject(err)
            })
        }
    }
}
