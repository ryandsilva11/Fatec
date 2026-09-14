#include<stdio.h>
main()
{
	int c,chave,n,i,j,k,l,temp,X[10],B[10],U[20], A[10];
	n=10;
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
	for(i=0;i<n;i++)
	{
		U[i]=A[i];
		U[i+n]=B[i];
	}
	
	for(i=0;i<2*n;i++)
		printf(" %d ",U[i]);
	c=0;
	chave=0;
	X[0]=U[0];
	for(i=1;i<2*n;i++)	
	{
		for(j=0;j<=c;j++)
			if(U[i]==X[j]) chave=1;
		if (chave==0)
			{
				c=c+1;
				X[c]=U[i];
			}
		chave=0;
	}
	printf("\n");
	for(i=0;i<=c;i++)
		printf(" %d ",U[i]);
		
}
