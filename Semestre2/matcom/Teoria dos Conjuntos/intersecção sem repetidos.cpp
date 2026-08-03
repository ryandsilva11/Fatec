#include<stdio.h>
main()
{
	int c,chave,n,i,j,k,l,temp,INTER[10],X[10],B[10],U[20], A[10];
	n=5;
	printf("Carregando os valores no vetor A");
	for(i=0;i<n;i++)
		{
			printf("\nEntre com o %d o valor",i);
			scanf("%d",&A[i]);
		}
	printf("Carregando os valores no vetor B");
	for(i=0;i<n;i++)
		{
			printf("\nEntre com o %d o valor",i);
			scanf("%d",&B[i]);
		}
	k=0;
	for(i=0;i<n;i++)
		for(j=0;j<n;j++)
			if(A[i]==B[j])
				{
					INTER[k]=B[j];
					k=k+1;
				}
	for(i=0;i<k;i++) printf(" %d ",INTER[i]);
	c=0;
	chave=0;
	X[0]=INTER[0];
	for(i=1;i<k;i++)	
	{
		for(j=0;j<k;j++)
			if(INTER[i]==X[j]) chave=1;
		if (chave==0)
			{
				c=c+1;
				X[c]=INTER[i];
			}
		chave=0;
	}
	printf("\n");			
	if(k==0) printf("Interseção vazia");
	else
		for(i=0;i<=c;i++)
			printf(" %d ",X[i]);
		
}
