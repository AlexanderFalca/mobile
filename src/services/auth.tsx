interface Response {
    token: string;
    user: {
        name: string;
        email: string;    
    };
}

export function signIn(): Promise<Response> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
            token: 'skfjdkjgfsadkjhfjdasbfkjsdahjfdfkjasfsakfhakasdjhfksjdahfkj',
            user: {
                name: 'Alexander',
                email: 'x_mordred@hotmail.com.br',
                 },
            });
        },1500);
    });
}