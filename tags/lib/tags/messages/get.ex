defmodule Tags.Messages.Get do
  import Ecto.Query

  alias Tags.{Message, Repo}

  def daily_messages do
    today = Date.utc_today()
    query = from message in Message, where: type(message.inserted_at, :date) == ^today

    Repo.all(query)
  end
end
