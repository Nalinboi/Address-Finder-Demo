class AddOtherAddressColumns < ActiveRecord::Migration[6.0]
  def change
    add_column :places, :address_line_1, :string
    add_column :places, :city, :string
    add_column :places, :country, :string
    add_column :places, :state, :string
    add_column :places, :postcode, :string
    #Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
  end
end
