PGDMP         /                x            vmg    12.3    12.3                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    24576    vmg    DATABASE     �   CREATE DATABASE vmg WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_South Africa.1252' LC_CTYPE = 'English_South Africa.1252';
    DROP DATABASE vmg;
                postgres    false            �            1259    24591    Vehicle    TABLE     �   CREATE TABLE public."Vehicle" (
    "Id" integer NOT NULL,
    "Client" character varying,
    "Model" character varying,
    "BookingDate" character varying,
    "Notes" character varying(25)
);
    DROP TABLE public."Vehicle";
       public         heap    postgres    false            �            1259    24589    vehicles_id_seq    SEQUENCE     �   CREATE SEQUENCE public.vehicles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.vehicles_id_seq;
       public          postgres    false    203            	           0    0    vehicles_id_seq    SEQUENCE OWNED BY     F   ALTER SEQUENCE public.vehicles_id_seq OWNED BY public."Vehicle"."Id";
          public          postgres    false    202            �
           2604    24594 
   Vehicle Id    DEFAULT     m   ALTER TABLE ONLY public."Vehicle" ALTER COLUMN "Id" SET DEFAULT nextval('public.vehicles_id_seq'::regclass);
 =   ALTER TABLE public."Vehicle" ALTER COLUMN "Id" DROP DEFAULT;
       public          postgres    false    203    202    203                      0    24591    Vehicle 
   TABLE DATA           T   COPY public."Vehicle" ("Id", "Client", "Model", "BookingDate", "Notes") FROM stdin;
    public          postgres    false    203   �
       
           0    0    vehicles_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.vehicles_id_seq', 25, true);
          public          postgres    false    202            �
           2606    24599    Vehicle vehicles_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public."Vehicle"
    ADD CONSTRAINT vehicles_pkey PRIMARY KEY ("Id");
 A   ALTER TABLE ONLY public."Vehicle" DROP CONSTRAINT vehicles_pkey;
       public            postgres    false    203               Z   x�32�I-.�tN,�44�74�7202��22�+$��������*m�NL+I-�h6�70�ɚp�%�5��4	)�%,�1z\\\ ���     