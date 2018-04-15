const handler = {
    get (_, name) {
        return (value, ...rest) => {
            return {
                [name]: rest.length && value != null
                    ? Object.assign(value, ...rest)
                    : value
            };
        };
    }
};

const jason = new Proxy({}, handler);
export default jason;
