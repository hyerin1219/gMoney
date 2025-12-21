import * as A from './styles';

interface ISearchProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSearch: () => void;
    placeholder?: string;
}

export default function Search({ value, onChange, onSearch }: ISearchProps) {
    return (
        <A.SearchWrap>
            <A.SearchInput value={value} onChange={onChange} type="text" placeholder="검색어를 입력하세요." />
            <A.SearchButton onClick={onSearch}>검색 </A.SearchButton>
        </A.SearchWrap>
    );
}
