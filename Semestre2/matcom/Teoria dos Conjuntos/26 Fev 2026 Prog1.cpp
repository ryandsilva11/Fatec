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
	
	for(i=1;i<=4;i++)
		for(j=i+1;j<=5;j++)
			if(a[i]>a[j])
				{
					temp=a[j];
					a[j]=a[i];
					a[i]=temp;
				}

	printf("Entrando com os valores no conjunto B:");
	for(i=1;i<=5;i++)
		{
			printf("\nDigite o valor na posição B[ %d ]:",i);
			scanf("%d",&b[i]);
		}

	for(i=1;i<=4;i++)
		for(j=i+1;j<=5;j++)
			if(b[i]>b[j])
				{
					temp=b[j];
					b[j]=b[i];
					b[i]=temp;
				}
		
	printf("Imprimindo os dados do conjunto A");
	for(i=1;i<=5;i++)
		printf("\nA[ %d] = %d",i,a[i]);
	getch();
	printf("\nImprimindo os dados do conjunto B");
	for(i=1;i<=5;i++)
		printf("\nB[ %d] = %d",i,b[i]);
		
	for(i=1;i<=5;i++)
	{
		u[i]=a[i];
		u[i+5]=b[i];
	}
	
		for(i=1;i<=9;i++)
		for(j=i+1;j<=10;j++)
			if(u[i]>u[j])
				{
					temp=u[j];
					u[j]=u[i];
					u[i]=temp;
				}

	printf("\nImprimindo os dados da União");	
	for(i=1;i<=10;i++)
		printf("\nU[%d]=%d",i,u[i]);
		
	c=0;
	printf("\n\n\n%d",c);
	for(i=1;i<=5;i++)
		for(j=1;j<=5;j++)
			if(a[i]==b[j])
			{
				c++;
				inter[c]=a[i];
			}	
	printf("\n\n\n\n%d",c);
	if(c==0)
		printf("\nA intersecção é vazia");
	else
		for(i=1;i<=c;i++) 
			printf("IT[%d]=%d",i,inter[i]);	
    
}
