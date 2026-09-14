#include<stdio.h>
#include<conio.h>
main()
{
	int c,inter[6],u[11],a[6],b[6],i,j,temp;
	
	printf("Entrando com os valores no conjunto A:");
	for(i=1;i<=5;i++)
		{
			printf("\nDigite o valor na posição A[ %d ]:",i);
			scanf("%d",&a[i]);
		}
	
	printf("Entrando com os valores no conjunto B:");
	for(i=1;i<=5;i++)
		{
			printf("\nDigite o valor na posição B[ %d ]:",i);
			scanf("%d",&b[i]);
		}
	printf("Imprimindo os dados do conjunto A");
	for(i=1;i<=5;i++)
		printf("\nA[ %d] = %d",i,a[i]);
	printf("\nImprimindo os dados do conjunto B");
	for(i=1;i<=5;i++)
		printf("\nB[ %d] = %d",i,b[i]);
	c=0;
	printf("\n\n\n%d",c);
	
	for(i=1;i<=5;i++)
		for(j=1;j<=5;j++)
			if(a[i]==b[j])
			{
				c=c+1;
				inter[c]=a[i];
			}	
	printf("\n\n\n\n%d",c);
	if(c!=0)
		{
			for(i=1;i<=c;i++) 
				printf("\nIT[%d]=%d",i,inter[i]);	
		}
	else
		printf("intersecção vazia");
}
