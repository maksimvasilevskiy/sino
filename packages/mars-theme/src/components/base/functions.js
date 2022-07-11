export const font = (size, lh) => {
  const sizeInRem = size / 10;

  return `
		font-size: ${sizeInRem}rem;
		line-height: calc(${lh}/${size});
	`;
};

export const flex = (fd, ai, jc, fw) => {
  return `
		display: flex;
		flex-direction: ${fd ? fd : "row"};
		align-items: ${ai ? ai : "flex-start"};
		justify-content: ${jc ? jc : "flex-start"};
		flex-wrap: ${fw ? fw : "nowrap"};
	`;
};
