import * as A from './styles';

type IAlertProps = {
    alertValue: string;
};

export default function Alert({ alertValue }: IAlertProps) {
    return (
        <A.AlertBox>
            <A.AlertContent>
                <A.AlertMessage>{alertValue}</A.AlertMessage>
            </A.AlertContent>
        </A.AlertBox>
    );
}
