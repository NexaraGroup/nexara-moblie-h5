'use client';

import { useImmer } from 'use-immer';

interface Props {
	className?: string;
	onSend: (msgCode: string) => Promise<boolean>;
}

const VerifyCodeInput = (props: Props) => {
	const [msgCode, setMsgCode] = useImmer<string>('');
	const [msgCodeError, setMsgCodeError] = useImmer<boolean>(false);
	const [isLoading, setIsLoading] = useImmer<boolean>(false);

	const handleMsgCodeChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		if (isLoading) return;
		if (msgCodeError) setMsgCodeError(false);
		setMsgCode(e.target.value);
		if (e.target.value.length !== 6) {
			return;
		}
		setIsLoading(true);
		const result = await props.onSend(e.target.value);
		setMsgCodeError(!result);
		setIsLoading(false);
	};

	return (
		<div className={`${props.className} relative overflow-hidden`}>
			<input
				type="text"
				maxLength={6}
				onChange={handleMsgCodeChange}
				className="text-[1px] text-[transparent] bg-[transparent] absolute position-full border-none outline-none
					fz-c1 dark:fz-c1"
				value={msgCode}
			/>
			<div className="flex justify-between space-x-3 mb-[9px] h-[50px]">
				{Array.from({ length: 6 }).map((_, index) => (
					<b
						key={index}
						className="text-center flex-1 text-[32px]
						text-fz-c1 dark:text-fz-c1"
					>
						{msgCode[index]}
					</b>
				))}
			</div>

			<div className="flex justify-between space-x-3">
				{Array.from({ length: 6 }).map((_, index) => (
					<i
						className={`block h-[2px] rounded-max relative flex-1 animate__animated
								${msgCodeError ? 'animate__shakeX' : ''}
								${msgCode.length >= index + 1 ? 'bg-bg-c1 dark:bg-bg-c1' : 'bg-bg-c2 dark:bg-bg-c2'}
								${msgCode.length === index ? 'animate__flash animate__infinite animate__slower' : ''}`}
						key={index}
					/>
				))}
			</div>
		</div>
	);
};

export default VerifyCodeInput;
