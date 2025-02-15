Need to install the following packages:
  supabase@1.106.1
Ok to proceed? (y) export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      order_details: {
        Row: {
          color: string
          comment: string
          created_at: string
          id: number
          order_history_id: number
          order_quantity: number
          processing: boolean
          product_name: string
          product_number: string
          quantity: number
          size: string
          supplier_id: number
        }
        Insert: {
          color?: string
          comment?: string
          created_at?: string
          id?: number
          order_history_id: number
          order_quantity?: number
          processing?: boolean
          product_name?: string
          product_number?: string
          quantity?: number
          size?: string
          supplier_id: number
        }
        Update: {
          color?: string
          comment?: string
          created_at?: string
          id?: number
          order_history_id?: number
          order_quantity?: number
          processing?: boolean
          product_name?: string
          product_number?: string
          quantity?: number
          size?: string
          supplier_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "order_details_order_history_id_fkey"
            columns: ["order_history_id"]
            referencedRelation: "order_histories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_details_supplier_id_fkey"
            columns: ["supplier_id"]
            referencedRelation: "suppliers"
            referencedColumns: ["id"]
          }
        ]
      }
      order_histories: {
        Row: {
          created_at: string
          deleted_at: string | null
          id: number
          order_number: string
          order_status: string
          processing: boolean
          shipping_address_id: number
          topic_name: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          id?: number
          order_number?: string
          order_status?: string
          processing?: boolean
          shipping_address_id: number
          topic_name?: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          id?: number
          order_number?: string
          order_status?: string
          processing?: boolean
          shipping_address_id?: number
          topic_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "order_histories_shipping_address_id_fkey"
            columns: ["shipping_address_id"]
            referencedRelation: "shipping_addresses"
            referencedColumns: ["id"]
          }
        ]
      }
      shipping_addresses: {
        Row: {
          address: string
          created_at: string
          id: number
          name: string
          post_code: string
          tel: string
          updated_at: string | null
        }
        Insert: {
          address?: string
          created_at?: string
          id?: number
          name?: string
          post_code?: string
          tel?: string
          updated_at?: string | null
        }
        Update: {
          address?: string
          created_at?: string
          id?: number
          name?: string
          post_code?: string
          tel?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      shipping_details: {
        Row: {
          created_at: string
          id: number
          order_detail_id: number | null
          quantity: number
          shipping_history_id: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: number
          order_detail_id?: number | null
          quantity?: number
          shipping_history_id: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: number
          order_detail_id?: number | null
          quantity?: number
          shipping_history_id?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "shipping_details_order_detail_id_fkey"
            columns: ["order_detail_id"]
            referencedRelation: "order_details"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shipping_details_shipping_history_id_fkey"
            columns: ["shipping_history_id"]
            referencedRelation: "shipping_histories"
            referencedColumns: ["id"]
          }
        ]
      }
      shipping_histories: {
        Row: {
          created_at: string
          created_by: string | null
          id: number
          shipping_address_id: number | null
          shipping_date: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          id?: number
          shipping_address_id?: number | null
          shipping_date: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          id?: number
          shipping_address_id?: number | null
          shipping_date?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "shipping_histories_created_by_fkey"
            columns: ["created_by"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shipping_histories_shipping_address_id_fkey"
            columns: ["shipping_address_id"]
            referencedRelation: "shipping_addresses"
            referencedColumns: ["id"]
          }
        ]
      }
      suppliers: {
        Row: {
          code: string
          created_at: string
          id: number
          name: string
          order: number
        }
        Insert: {
          code?: string
          created_at?: string
          id?: number
          name?: string
          order?: number
        }
        Update: {
          code?: string
          created_at?: string
          id?: number
          name?: string
          order?: number
        }
        Relationships: []
      }
      users: {
        Row: {
          email: string | null
          first_name: string | null
          id: string
          last_name: string | null
          role: string | null
        }
        Insert: {
          email?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
          role?: string | null
        }
        Update: {
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          role?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      getSuppliers: {
        Args: Record<PropertyKey, never>
        Returns: Record<string, unknown>
      }
      postSupplier: {
        Args: {
          data: Json
        }
        Returns: undefined
      }
      sample: {
        Args: Record<PropertyKey, never>
        Returns: Record<string, unknown>
      }
      sample2: {
        Args: {
          a: boolean
        }
        Returns: Record<string, unknown>
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null
          avif_autodetection: boolean | null
          created_at: string | null
          file_size_limit: number | null
          id: string
          name: string
          owner: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id: string
          name: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id?: string
          name?: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "buckets_owner_fkey"
            columns: ["owner"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          path_tokens: string[] | null
          updated_at: string | null
          version: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "objects_bucketId_fkey"
            columns: ["bucket_id"]
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "objects_owner_fkey"
            columns: ["owner"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string
          name: string
          owner: string
          metadata: Json
        }
        Returns: undefined
      }
      extension: {
        Args: {
          name: string
        }
        Returns: string
      }
      filename: {
        Args: {
          name: string
        }
        Returns: string
      }
      foldername: {
        Args: {
          name: string
        }
        Returns: unknown
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucket_id: string
        }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits?: number
          levels?: number
          offsets?: number
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
