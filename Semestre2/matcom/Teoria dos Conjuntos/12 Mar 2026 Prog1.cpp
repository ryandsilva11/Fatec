#include<stdio.h>
#include<conio.h>
main()
{
	int dsab[11],cu,ci,valor,chave,c,cab[6],cba[6],inter[6],u1[11],u[11],a[6],b[6],i,j,temp;
	
	printf("Entrando com os valores no conjunto A:");
	c=1;
	while (c<=5)
	{
		if(c==1)
			{
				printf("Entre com o valor vetor A[%d] ",c);
				scanf("%d",&a[c]);
				c=c+1;
			}
		else
			{
				chave=0;
				printf("Entre com o valor vetor A[%d] ",c);
				scanf("%d",&valor);
				for(i=1;i<c;i++)
					if(a[i]==valor)
						chave=1;
				if(chave==0)
				{
					a[c]=valor;
					c=c+1;
				}
				else
					printf("Este valor já existe Digite um novo valor !!!");
			}
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
	c=1;
	while (c<=5)
	{
		if(c==1)
			{
				printf("Entre com o valor vetor B[%d] ",c);
				scanf("%d",&b[c]);
				c=c+1;
			}
		else
			{
				chave=0;
				printf("Entre com o valor vetor B[%d] ",c);
				scanf("%d",&valor);
				for(i=1;i<c;i++)
					if(b[i]==valor)
						chave=1;
				if(chave==0)
				{
					b[c]=valor;
					c=c+1;
				}
				else
					printf("Este valor já existe Digite um novo valor !!!");
			}
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
	
/* aqui deve ser feita a retirada dos elementos repetidos da união*/
c=1;
chave=0;
u1[1]=u[1];
for(i=1;i<11;i++)
{
	for(j=1;j<=c;j++)
		if(u[i]==u1[j]) chave=1;
	if(chave==0)
	{
		c=c+1;
		u1[c]=u[i];
	}	
	chave=0;
}	

		for(i=1;i<=c-1;i++)
		for(j=i+1;j<=c;j++)
			if(u1[i]>u1[j])
				{
					temp=u1[j];
					u1[j]=u1[i];
					u1[i]=temp;
				}
cu=c;
	printf("\nImprimindo os dados da União");	
	for(i=1;i<=c;i++)
		printf("\nU[%d]=%d",i,u1[i]);
		
	c=0;
	for(i=1;i<=5;i++)
		for(j=1;j<=5;j++)
			if(a[i]==b[j])
			{
				c++;
				inter[c]=a[i];
			}	
	printf("\n\n\n\n%d",c);
ci=c;
	if(c==0)
		printf("\nA intersecção é vazia");
	else
		for(i=1;i<=c;i++) 
			printf("\nIT[%d]=%d",i,inter[i]);	
    
    
c=0;    
for(i=1;i<=5;i++)   
{
	chave=1;
	for(j=1;j<=5;j++)
		if(a[i]==b[j])
		{
			chave=0;
			j=1000;
		}
	if(chave==1)
	{
		c=c+1;
		cab[c]=a[i];
		chave=1;
	}
} 

printf("\nDiferença A - B");
if(c==0)
	printf("A diferença A - B é VAZIA");
else
	for(i=1;i<=c;i++)
	printf("\nA - B [%d] = %d",i,cab[i]);	
    
c=0;    
for(i=1;i<=5;i++)   
{
	chave=1;
	for(j=1;j<=5;j++)
		if(b[i]==a[j])
		{
			chave=0;
			j=1000;
		}
	if(chave==1)
	{
		c=c+1;
		cba[c]=b[i];
		chave=1;
	}
} 

printf("\nDiferença B - A");
if(c==0)
	printf("A diferença B - A é VAZIA");
else
	for(i=1;i<=c;i++)
	printf("\nB - A [%d] = %d",i,cba[i]);

c=0;    
for(i=1;i<=cu;i++)   
{
	chave=1;
	for(j=1;j<=ci;j++)
		if(u1[i]==inter[j])
		{
			chave=0;
			j=1000;
		}
	if(chave==1)
	{
		c=c+1;
		dsab[c]=u1[i];
		chave=1;
	}
} 

printf("\nDiferença Simétrica de A e B");
if(c==0)
	printf("A diferença simétrica A e B é VAZIA");
else
	for(i=1;i<=c;i++)
	printf("\nDS (A e B) [%d] = %d",i,dsab[i]);

}
