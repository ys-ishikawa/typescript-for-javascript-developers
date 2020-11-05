import axios from 'axios';

export {};

let url: string = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';


axios.get(url).then(function(res) {
    // 独自の型を作成

    interface Article {
        id: number,
        title: string,
        description: string
    }
    
    let data: Article[] = res.data;
    
    // data = [
    //     {
    //         id: 1,
    //         title: 'title',
    //         description: 'description'
    //     }
    // ];

    console.log(data);
});
