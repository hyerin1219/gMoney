import * as A from './styles';

import { useRegistrationList } from '../../../hooks/useRegistrationList';

export default function RegistrationListComponent(): JSX.Element {
    const { stores } = useRegistrationList();

    return (
        <section className="Wrap">
            <A.MainBox>
                <div>
                    <h3>차별 거래 신고 내역</h3>
                    <A.RegistrationListBox>
                        {stores.map((el) => (
                            <A.RegistrationList key={el.documentId}>
                                <p>{el.title}</p>

                                <p>{el.id.nickname.slice(0, 1) + '**'}</p>
                            </A.RegistrationList>
                        ))}
                    </A.RegistrationListBox>
                </div>
            </A.MainBox>
        </section>
    );
}
