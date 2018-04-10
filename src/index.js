const handler = {
    get (_, name) {
        return (...params) => {
            let value = params.shift();
            if (params.length && value && typeof value === 'object') {
                value = params.reduce(
                    (acc, value) => value && typeof value === 'object'
                        ? Object.assign(acc, value)
                        : acc,
                value);
            }

            return {[name]: value};
        };
    }
};

const jason = new Proxy({}, handler);
export default jason;
