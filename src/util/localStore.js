export default {
    getItem: function (key) {
        let value
        try {
            value = localStorage.getItem(key)
        } catch (ex) {

        } finally {
            return value
        }
    },
    setItem: function (key, value) {
        try {
            localStorage.setItem(key, value)
        } catch (ex) {

        }
    }
}
