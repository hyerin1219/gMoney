import * as yup from 'yup';



export const schema = yup.object({

    name: yup.string().required('상호를 입력해주세요.'),
    
    category: yup.string().required('사업자등록증의 업종을 기입하세요.'),

    addressDetail: yup.string().required('주소를 입력해주세요.'),

    content: yup.string().required('신고 내용을 입력해주세요.')
});
